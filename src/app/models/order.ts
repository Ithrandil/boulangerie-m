import { ProductUnit } from './product';

export interface Order {
  name: string;
  phone: number;
  address: Address;
  hasDifferentDeliveryAddress: boolean;
  deliveryAddress: Address;
  order: OrderList;
  deliveryTime: Date;
  orderTime: Date;
  totalPrice: number;
}

export type OrderList = [
  { product: string; quantity: number; unit: ProductUnit }?
];

export interface Address {
  street: string;
  zipCode: number;
  city: string;
}
