import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as speciesActions from './species.action';
import { of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { SpeciesService } from '../services';

@Injectable()
export class SpeciesEffects {
  constructor(
    private _actions$: Actions,
    private _speciesService: SpeciesService
  ) {}

  getAllSpecies$ = createEffect(() =>
    this._actions$.pipe(
      ofType(speciesActions.getAllSpecies),
      switchMap(() =>
        this._speciesService.getAllSpecies().pipe(
          map((speciesPayload) =>
            speciesActions.getAllSpeciesSuccess({ speciesPayload })
          ),
          catchError((error) => of(speciesActions.getAllSpeciesFailure(error)))
        )
      )
    )
  );
}
