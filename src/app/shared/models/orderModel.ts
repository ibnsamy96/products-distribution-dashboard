export class OrderModel {
<<<<<<< HEAD
  constructor(
  public orderId: number,
  public facebookAdminName: string,
  public orderDate: Date,
  public itemName: string,
  public itemCost: number,
  public deliveryCost: number,
  public clientName: string,
  public clientPhoneNumber1: number,
  public address: {
    region: string;
    addressInDetails: string;
  },
  public clientPhoneNumber2 ?: number,
  public orderState ?: {
    onDelivry: boolean;
    delvired: boolean;
=======
  public orderId: number;
  public facebookAdminName: string;
  public orderDate: Date;
  public deliveryName: string;
  public itemName: string;
  public itemCost: number;
  public deliveryCost: number;
  public clientName: string;
  public clientPhoneNumber1: number;
  public clientPhoneNumber2: number;
  // tslint:disable-next-line: align
  public address: {
    region: string;
    addressInDetails: string;
  };
  public orderState: {
    onDelivery: boolean;
    delivered: boolean;
>>>>>>> 9917fc85703cf13855948a139805f8a2d70aa9dc
    rejected: boolean;
  } ,
  public deliveryName ?: string
  ){}
}

