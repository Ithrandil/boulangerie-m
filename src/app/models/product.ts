export interface Product {
  productId: string;
  name: string;
  description: string;
  unit: ProductUnit;
  price: number;
  available: boolean;
  shortDelivery: boolean;
  category: ProductCategory;
  isSliceable: boolean;
  isBio: boolean;
}

export enum ProductUnit {
  KG = 'KILO',
  UNIT = 'UNIT',
}

export enum ProductUnitWording {
  KG = 'kilo',
  UNIT = 'unité',
}

export enum ProductCategory {
  BAGUETTE = 'BAGUETTE',
  SANDWICH = 'SANDWICH',
  INDIVIDUEL = 'INDIVIDUEL',
  COUPE = 'COUPE',
  PIECE = 'PIECE',
  VIENNOISERIE = 'VIENNOISERIE',
  MIE = 'MIE',
  GATEAU = 'GATEAU',
  PATES = 'PATES',
}

export enum ProductCategoryWording {
  BAGUETTE = 'Baguettes',
  SANDWICH = 'Pains sandwichs',
  INDIVIDUEL = 'Pains individuels',
  COUPE = 'Pains à la coupe',
  PIECE = 'Pains à la pièce',
  VIENNOISERIE = 'Viennoiseries',
  MIE = 'Pains de mie / Buns',
  GATEAU = 'Gâteaux de voyage',
  PATES = 'Pâtes',
}

// FIXME: FAIRE DES BUILDER POUR LE WORDING CATEG ET UNIT COUCHES MVC car là duplication à mort
