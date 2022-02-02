import { Body, Controller, Get, Post } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get('/')
  run() {
    return [this.cpuService.compute(12, 18), this.diskService.getData()];
  }

  @Post('/login')
  login(@Body() { email, password }: { email: string; password: string }) {
    return this.cpuService.userLogin(email, password);
  }
  @Post('/signup')
  signup(
    @Body()
    {
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    },
  ) {
    return this.cpuService.userSignup(email, password, name);
  }
}
