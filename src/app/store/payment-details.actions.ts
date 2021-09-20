import { createAction, props } from '@ngrx/store';

const setPaymentDetails = '[PaymentDetails] load payment-details';
const resetPaymentDetails = '[PaymentDetails] reset payment-details';

export const setPaymentDetailSuccess = createAction(
  setPaymentDetails,
  props<{ paymentDetail: any }>()
);

export const resetPaymentDetailSuccess = createAction(resetPaymentDetails);
