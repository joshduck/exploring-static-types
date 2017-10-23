// @flow

type PaymentStatus = 
  { status: 'pending' } | 
  { status: 'failed', error: string } | 
  { status: 'completed', confirmation: string };

function renderPayment(payment: PaymentStatus) {
  if (payment.status === 'pending') {
    console.log('Please wait...');
  } else if (payment.status === 'failed') {
    console.log('Payment failed: ' + payment.error);
  } else {
    console.log('Thankyou for your payment: ' + payment.confirmation);
    // console.log('Payment failed: ' + payment.error);
  }
}