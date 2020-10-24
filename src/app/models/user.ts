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
