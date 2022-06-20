import { createAction, props } from '@ngrx/store';

const actionSource = '[Region]';

export const fetchRegion = createAction(`${actionSource} Fetch setRegion`,props<{region :string}>());
