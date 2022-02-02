import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(public powerService: PowerService) {}

  getData() {
    console.log('Drawing 5 watts of power');
    this.powerService.supplyPower(5);
    return 'DAta is this!';
  }
}
