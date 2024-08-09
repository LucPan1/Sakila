import { Test, TestingModule } from '@nestjs/testing';
import { RentalsService } from './rental.service';

describe('RentalService', () => {
  let service: RentalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalsService],
    }).compile();

    service = module.get<RentalsService>(RentalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
