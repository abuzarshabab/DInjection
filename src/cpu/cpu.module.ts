import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';
import { DbRepository } from './cpu.repository';

@Module({
  // Which modules are nesessery for this module
  imports: [PowerModule],

  // which services are necessary for this module
  providers: [CpuService, DbRepository],

  // Which service of this module can be exporeted
  exports: [CpuService],
})
export class CpuModule {}
