export const monthlyInterest = (amount, rate, term) => {
  const monthlyRate = rate / 1200;
  const numberOfPayments = term * 12;
  return (
    (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
};

export const totalRepayment = (amount, rate, term) => {
  const monthlyPayment = monthlyInterest(amount, rate, term);
  return monthlyPayment * term * 12;
};
