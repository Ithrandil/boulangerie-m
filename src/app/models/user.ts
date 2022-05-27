export interface User extends UserFirebase {
  name: string;
  phone: number;
  address: Address;
  hasDifferentDeliveryAddress?: boolean;
  deliveryAddress?: Address;
  firebaseUid?: string;
  isAdmin: boolean;
}

export interface Address {
  street: string;
  zipCode: number;
  city: string;
}

export interface UserFirebase {
  email: string;
  password?: string;
}
