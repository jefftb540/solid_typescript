import { CartItem } from './cart-item';
import { Customer } from './customer-protocol';

export interface ShoppingCartProtocol {
  get customer(): Customer;

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  get itens(): Readonly<CartItem[]>;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
