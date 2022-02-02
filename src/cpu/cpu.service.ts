import { Injectable, NotFoundException } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
import { DbRepository } from './cpu.repository';

@Injectable()
export class CpuService {
  constructor(
    private powerService: PowerService,
    private dbRepo: DbRepository,
  ) {}

  compute(a: number, b: number) {
    console.log('drawing 10 Watts of power');
    this.powerService.supplyPower(10);
    return a + b;
  }

  userSignup(email: string, password: string, name: string) {
    const user = this.dbRepo.addUser(email, password, name);
    console.log(user);
    return user;
  }

  userLogin(email: string, password: string) {
    const user = this.dbRepo.findUser(email, password);
    if (!user) throw new NotFoundException('User Not found');
    return user;
  }
}
