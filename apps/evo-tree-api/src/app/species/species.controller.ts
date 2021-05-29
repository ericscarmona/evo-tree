import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { Species } from './species.entity';
@Controller('species')
export class SpeciesController {
  constructor(private _speciesService: SpeciesService) {}

  @Get()
  async getAllSpecies(): Promise<Species[]> {
    return await this._speciesService.getAllSpecies();
  }

  @Get('/:id')
  getSpeciesById() {}

  @Post()
  createNewSpecies() {}

  @Put('/:id')
  updateSpecies() {}

  @Delete('/:id')
  deleteSpeciesById() {}
}
