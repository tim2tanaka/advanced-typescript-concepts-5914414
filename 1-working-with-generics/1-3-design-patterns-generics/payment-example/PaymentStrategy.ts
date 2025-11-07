export interface PaymentStrategy {
  processPayment(amount: number): string;
  processBalance(balance: number, amount:number): number;
}
