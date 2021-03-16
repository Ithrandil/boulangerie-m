import { firestore } from 'firebase';

import { ProductUnit } from './product';

export interface Order {
  orderId: string;
  name: string;
  phone: number;
  address: Address;
  hasDifferentDeliveryAddress: boolean;
  deliveryAddress: Address;
  deliveryTime: string;
  order: OrderList;
  deliveryDate: firestore.Timestamp;
  orderDate: firestore.Timestamp;
  orderComment: string;
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
