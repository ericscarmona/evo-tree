import { Component, OnInit } from '@angular/core';
import { SpeciesFacade } from '@evo-tree/species-data-access';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _speciesFacade: SpeciesFacade) {}

  ngOnInit() {
    this._speciesFacade.getAllSpecies();
  }
}
