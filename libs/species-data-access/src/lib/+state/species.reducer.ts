import { Action, createReducer, on } from '@ngrx/store';
import * as speciesActions from './species.action';

export const SPECIES_KEY = 'species';

export interface SpeciesState {
  loading: boolean;
  data: any;
}

export const initialSpeciesState = {
  loading: false,
  data: [],
};

export const reducer = createReducer(
  initialSpeciesState,
  on(speciesActions.getAllSpecies, (state) => ({
    ...state,
    loading: true,
  })),
  on(speciesActions.getAllSpeciesSuccess, (state, { speciesPayload }) => ({
    ...state,
    data: speciesPayload,
    loading: false,
  })),
  on(speciesActions.getAllSpeciesFailure, (state) => ({
    ...state,
    loading: false,
  }))
);

export function speciesReducer(
  state: SpeciesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
