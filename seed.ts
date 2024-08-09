import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

async function main() {
  const today = dayjs().startOf('day');

  // Ajoute une location avec une date de retour dans 5 jours
  await prisma.rental.create({
    data: {
      rental_date: today.toDate(),
      inventory_id: 1,
      customer_id: 1,
      return_date: today.add(5, 'day').toDate(),
      staff_id: 1,
    },
  });

  // Ajoute une location avec une date de retour dans 3 jours
  await prisma.rental.create({
    data: {
      rental_date: today.toDate(),
      inventory_id: 2,
      customer_id: 2,
      return_date: today.add(3, 'day').toDate(),
      staff_id: 1,
    },
  });

  console.log('Données de test ajoutées avec succès.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
