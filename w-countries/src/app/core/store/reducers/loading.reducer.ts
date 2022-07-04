import { createAction, props, createReducer, on } from '@ngrx/store';

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
