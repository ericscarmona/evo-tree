import * as speciesActions from './species.action';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SpeciesState } from './species.reducer';

@Injectable({
  providedIn: 'root',
})
export class SpeciesFacade {
  constructor(private _store$: Store<SpeciesState>) {}

  getAllSpecies() {
    this._store$.dispatch(speciesActions.getAllSpecies());
  }
}
