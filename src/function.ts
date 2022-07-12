 export function calculateDiscount(amount: number, discount: number) {
  return amount * (100 - discount) * 0.01;
}
export function sum(...numbers: Array<number>) {
  return numbers.reduce((total, current) => total + current, 0);
}
