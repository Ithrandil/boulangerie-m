import { ProductUnit } from './product';

export interface Order {
  user: User;
  order: [{ product: string; quantity: number; unit: ProductUnit }];
  deliveryTime: Date;
  orderTime: Date;
  totalPrice: number;
}

export interface User {
  name: string;
  phone: number;
  address: Address;
  hasDifferentDeliveryAddress: boolean;
  deliveryAddress: Address;
}

export interface Address {
  street: string;
  zipCode: number;
  city: string;
}
