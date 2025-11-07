import { PaymentStrategy } from './PaymentStrategy';

export class CryptoStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Simulate cryptocurrency payment processing
    console.log(`Processing cryptocurrency payment for amount: $${amount}`);
    return `Cryptocurrency payment of $${amount} processed.`;
  };
    processBalance(balance: number, amount: number): number {
    // Simulate CryptoStrategy payment processing
    console.log(`Processing CryptoStrategy balance`);
    const total = balance - amount;
    return total;
  }
}
