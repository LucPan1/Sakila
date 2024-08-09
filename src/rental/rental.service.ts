import { HttpException, Injectable } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateRentalDto } from './dto/create-rental.dto'
import { Prisma } from '@prisma/client';

@Injectable()
export class RentalsService {
  constructor(private readonly prisma: AppService) {}

  async createRental(createRentalDto: CreateRentalDto) {
    const { customer_id, inventory_id, rental_date, return_date, rental_duration } = createRentalDto;

    // Récupération des informations du film
    const film = await this.prisma.film.findUnique({
      where: { film_id: inventory_id },
    });

    if (!film) {
      throw new HttpException('Film not found', 404);
    }

    // Durée de location par défaut si non spécifiée
    const duration = rental_duration || film.rental_duration;

    // Calcul de la date de retour si non spécifiée
    const calculatedReturnDate = return_date || 
        new Date(new Date(rental_date).getTime() + duration * 24 * 60 * 60 * 1000);

    // Vérification des contraintes de la durée de location
    const daysBetween = (new Date(calculatedReturnDate).getTime() - new Date(rental_date).getTime()) / (1000 * 3600 * 24);
    if (daysBetween < 7 || daysBetween > 21) {
      throw new HttpException('Rental period must be between 7 and 21 days', 400);
    }

    // Création de la location
    const rentalData: Prisma.RentalCreateInput = {
      rental_date: new Date(rental_date),
      return_date: calculatedReturnDate,
      inventory_id,
      staff_id: 1, 
      customer: {
        connect: { customer_id }  
      },
    };

    return this.prisma.rental.create({ data: rentalData });
  }
}
