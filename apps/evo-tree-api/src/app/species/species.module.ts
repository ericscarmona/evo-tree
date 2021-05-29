import { Module } from '@nestjs/common';
import { SpeciesController } from './species.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './species.entity';
import { SpeciesService } from './species.service';

@Module({
  imports: [TypeOrmModule.forFeature([Species])],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}
