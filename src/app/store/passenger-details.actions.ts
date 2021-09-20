import { createAction, props } from '@ngrx/store';

const setPassengerDetails = '[PassengerDetails] load passenger-details';
const resetPassengerDetails = '[PassengerDetails] reset passenger-details';

export const setPassengerDetailSuccess = createAction(
  setPassengerDetails,
  props<{ passengerDetail: any }>()
);

export const resetPassengerDetailSuccess = createAction(resetPassengerDetails);
