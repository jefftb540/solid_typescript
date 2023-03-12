import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistance } from '../services/persistance';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly _cart: ShoppingCart,
    private readonly _messaging: Messaging,
    private readonly persistance: Persistance
  ) {}
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this._cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.persistance.saveOrder();
    this._messaging.sendMessage('Pedido recebido');
    this._cart.clear();
  }
}
