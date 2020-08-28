export class OrderModel {
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

    rejected: boolean;
  } ,
  public deliveryName ?: string
  ){}
}

