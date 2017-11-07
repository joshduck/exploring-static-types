// @flow

type PaymentStatus = { 
  status: "pending" | "failed" | "complete",
  errorCode?: number,
  successMessage?: string
};

function renderPayment(payment: PaymentStatus) {
  if (payment.status === "failed") {
    console.log("Payment failed: " + payment.errorCode);
  }
}


