import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SPECIES_KEY, speciesReducer } from './+state/species.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SpeciesEffects } from './+state/species.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(SPECIES_KEY, speciesReducer),
    EffectsModule.forFeature([SpeciesEffects]),
  ],
  exports: [],
})
export class SpeciesDataAccessModule {}
