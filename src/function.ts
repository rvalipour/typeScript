function calculateDiscount(amount: number, discount: number) {
  return amount * (100 - discount) * 0.01;
}
function sum(...numbers: Array<number>) {
  return numbers.reduce((total, current) => total + current, 0);
}
