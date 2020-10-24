export interface Product {
  name: string;
  description: string;
  unit: ProductUnit;
  price: number;
}

export enum ProductUnit {
  KG = 'KG',
  UNIT = 'UNIT',
}
