// @flow






type PaymentStatus =
  { status: "pending" } |
  { status: "failed", errorCode: number } |
  { status: "completed", successMessage: string };

function renderPayment(payment: PaymentStatus) {
  if (payment.status === "failed") {
    console.log("Payment failed: " + payment.errorCode);
  } 
}