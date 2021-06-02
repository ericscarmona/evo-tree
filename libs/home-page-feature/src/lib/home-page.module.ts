import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { SpeciesDataAccessModule } from '@evo-tree/species-data-access';
@NgModule({
  imports: [CommonModule, SpeciesDataAccessModule],
  declarations: [HomePageComponent],
  providers: [],
  exports: [],
})
export class HomePageModule {}
