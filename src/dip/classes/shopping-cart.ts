import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { Customer } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount, private readonly _customer: Customer) {}

  get customer(): Customer {
    return this._customer;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get itens(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return Number(this._items.reduce((total, next) => total + next.price, 0).toFixed(2));
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras limpo');
    this._items.length = 0;
  }
}
