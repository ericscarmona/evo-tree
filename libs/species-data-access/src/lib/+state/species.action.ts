import { createAction, props } from '@ngrx/store';

export const getAllSpecies = createAction('[Species] Get All Species');

export const getAllSpeciesSuccess = createAction(
  '[Species] Get All Species Success',
  props<{ speciesPayload: any }>()
);

export const getAllSpeciesFailure = createAction(
  '[Species] Get All Species Failure',
  props<{ error: Error }>()
);
