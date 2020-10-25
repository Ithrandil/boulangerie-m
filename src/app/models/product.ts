export interface Product {
  productId?: string;
  name: string;
  description?: string;
  unit: ProductUnit;
  price: number;
  available: boolean;
  shortDelivery: boolean;
}

export enum ProductUnit {
  KG = 'kilo',
  UNIT = 'unité',
}
