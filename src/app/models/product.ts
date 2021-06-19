export interface Product {
  productId: string;
  name: string;
  description: string;
  unit: ProductUnit;
  price: number;
  available: boolean;
  shortDelivery: boolean;
  category: ProductCategory;
  isSliceable: string;
}

export enum ProductUnit {
  KG = 'kilo',
  UNIT = 'unité',
}

export enum ProductCategory {
  BAGUETTE = 'Baguettes',
  SANDWICH = 'Pains sandwichs',
  INDIVIDUEL = 'Pains individuels',
  COUPE = 'Pains à la coupe',
  PIECE = 'Pains à la pièce',
  VIENNOISERIE = 'Viennoiseries',
  MIE = 'Pains de mie',
  GATEAU = 'Gâteaux de voyage',
  PATES = 'Pâtes',
}
