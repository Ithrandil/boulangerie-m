export interface Product {
  name: string;
  description: string;
  unit: ProductUnit;
  price: number;
  available: boolean;
  shortDelivery: boolean;
}

export enum ProductUnit {
  KG = 'KG',
  UNIT = 'UNIT',
}
