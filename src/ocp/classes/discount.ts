export abstract class Discount {
  abstract calculate(price: number): number;
}

export class FiftyPercenteDiscount extends Discount {
  private readonly discount = 50;
  calculate(price: number): number {
    return price - (price * this.discount) / 100;
  }
}

export class noDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
