import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from './species.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private _speciesRepo: Repository<Species>
  ) {
    this.seedRepo();
    // this._speciesRepo.clear();
  }

  async seedRepo() {
    if (await this.isRepoEmpty()) {
      await this._speciesRepo.insert({
        name: 'Amoeba',
        parentId: null,
        children: null,
      });
    }
  }

  async isRepoEmpty(): Promise<boolean> {
    return (await this._speciesRepo.count()) === 0;
  }

  async getAllSpecies() {
    return await this._speciesRepo.find();
  }
}
