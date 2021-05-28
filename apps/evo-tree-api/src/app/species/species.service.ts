import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from './species.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpeciesService {
  constructor(@InjectRepository(Species) speciesRepo: Repository<Species>) {}
}
