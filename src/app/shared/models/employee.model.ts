export interface Employee {

  id?: string;
  name: string;
  email: string;
  role: 'facebook-admin' | 'delivery-man' | 'system-admin';
  password: string;
  phoneNumber: number;

}
