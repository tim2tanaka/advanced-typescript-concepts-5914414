import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardStrategy } from './CreditCardStrategy';
import { PayPalStrategy } from './PayPalStrategy';
import { CryptoStrategy } from './CryptoStrategy';

const balance = 1150;
const amount = 150;
const creditCard = new CreditCardStrategy();
const payPal = new PayPalStrategy();
const crypto = new CryptoStrategy();

const paymentProcessor = new PaymentProcessor(creditCard);
console.log(paymentProcessor.processPayment(amount));  // Uses Credit Card strategy
console.log(paymentProcessor.processBalance(balance, amount));  // Uses Credit Card strategy

// Switches to PayPal strategy
paymentProcessor.setStrategy(payPal);
console.log(paymentProcessor.processPayment(amount)); 

// Switches to Cryptocurrency strategy
paymentProcessor.setStrategy(crypto);
console.log(paymentProcessor.processPayment(amount));
