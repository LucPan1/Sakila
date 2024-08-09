import { Module, forwardRef } from '@nestjs/common';
import { RentalsService } from './rental.service';
import { RentalController } from './rental.controller';
import { AppModule } from 'src/app.module';
// import { RentalScheduler } from 'src/schedule/rental.scheduler';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [RentalController],
  providers: [RentalsService],
})
export class RentalModule {}
