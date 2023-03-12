import { Messaging } from './ocp/services/messaging';
import { Order } from './ocp/classes/order';
import { Persistance } from './ocp/services/persistance';
import { Product } from './ocp/classes/Product';
import { ShoppingCart } from './ocp/classes/shopping-cart';
import { FiftyPercenteDiscount } from './ocp/classes/discount';

const fiftyPercenteDiscount = new FiftyPercenteDiscount();
const shoppingCart = new ShoppingCart(fiftyPercenteDiscount);
const messaging = new Messaging();
const persistance = new Persistance();
const order = new Order(shoppingCart, messaging, persistance);

shoppingCart.addItem(new Product('vamisa do vasco I Branca', 100.0));
shoppingCart.addItem(new Product('vamisa do vasco II Preta', 100.0));
shoppingCart.addItem(new Product('vamisa do vasco III', 100.0));

console.log(shoppingCart.itens);
console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
