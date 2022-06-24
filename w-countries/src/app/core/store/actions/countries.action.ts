import { createAction, props } from '@ngrx/store';
import { ICountry } from 'src/app/shared/interfaces/interfaces';

const actionSource = '[Region]';

export const fetchRegion = createAction(`${actionSource} Fetch setRegion`,props<{region :string}>());
export const fetchCountries = createAction(`${actionSource} Fetch setCountries`,props<{countries :ICountry[]}>());
export const fetchDetail = createAction(`${actionSource} Fetch setDetail`,props<{detail :ICountry|undefined}>());
