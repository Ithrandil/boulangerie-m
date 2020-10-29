import { ProductUnit } from './product';

export interface Order {
  name: string;
  phone: number;
  address: Address;
  hasDifferentDeliveryAddress: boolean;
  deliveryAddress: Address;
  order: [{ product: string; quantity: number; unit: ProductUnit }];
  deliveryTime: Date;
  orderTime: Date;
  totalPrice: number;
}

export interface Address {
  street: string;
  zipCode: number;
  city: string;
}
