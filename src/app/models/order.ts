import { Timestamp } from '@firebase/firestore-types';
import { ProductUnit } from './product';

export interface Order {
  orderId: string;
  firebaseUid: string,
  name: string;
  phone: number;
  address: Address;
  hasDifferentDeliveryAddress: boolean;
  deliveryAddress: Address;
  deliveryTime: string;
  order: OrderProduct[];
  deliveryDate: Timestamp;
  orderDate: Timestamp;
  orderComment: string;
  totalPrice: number;
}

export interface OrderProduct {
  product: string;
  quantity: number;
  unit: ProductUnit;
  isSliced?: boolean;
  comment?: string;
}

export interface Address {
  street: string;
  zipCode: number;
  city: string;
}

export interface OrderSummary {
  products: [string, number][];
  sliced: [string, boolean][];
  comments: [string, string][];
}
