export abstract class Discount {
  protected discount = 0;
  alculate(price: number): number {
    return price - (price * this.discount) / 100;
  }
}

export class FiftyPercenteDiscount extends Discount {
  protected discount = 50;
}

export class noDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
