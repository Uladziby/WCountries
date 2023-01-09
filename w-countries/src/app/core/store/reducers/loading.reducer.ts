import { createSelector } from '@ngrx/store';
import { createAction, props, createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/shared/interfaces/interfaces';

const actionSource = '[Loading]';

export const isFetchinAction = createAction(
  `${actionSource}`,
  props<{ isLoading: boolean }>()
);

const initialState = {
  isLoading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(isFetchinAction, (_, { isLoading }) => ({
    isLoading: isLoading,
  }))
);


export const AppStore =  (state: AppState) => state;

export const selectIsFetching = createSelector( AppStore, (state : AppState)=> state.isFetching)