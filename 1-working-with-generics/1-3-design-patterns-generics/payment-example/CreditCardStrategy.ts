import { PaymentStrategy } from './PaymentStrategy';

export class CreditCardStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Simulate credit card payment processing
    console.log(`Processing credit card payment for amount: $${amount}`);
    return `Credit card payment of $${amount} processed.`;
  };
  processBalance(balance: number, amount: number): number {
    // Simulate CreditCardStrategy payment processing
    console.log(`Processing CreditCardStrategy balance`);
    const total = balance - amount;
    return total;
  }
}
