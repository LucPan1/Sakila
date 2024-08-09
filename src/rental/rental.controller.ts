import { Controller, Post, Body  } from '@nestjs/common';
import { RentalsService } from './rental.service';
import { CreateRentalDto } from './dto/create-rental.dto';
// import { RentalScheduler } from '../schedule/rental.scheduler';


@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalsService, 
    // private readonly rentalScheduler: RentalScheduler,
  ) {}

  @Post()
  create(@Body() createRentalDto: CreateRentalDto) {
    return this.rentalService.createRental(createRentalDto);
  }

  // @Post('trigger-scheduled-emails')
  // async triggerScheduledEmailsManually() {
  //   await this.rentalScheduler.triggerScheduledEmailsManually();
  //   return { message: 'Scheduled emails manually triggered' };
  // }
  // @Get()
  // findAll() {
  //   return this.rentalService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rentalService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRentalDto: UpdateRentalDto) {
  //   return this.rentalService.update(+id, updateRentalDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rentalService.remove(+id);
  // }
}
