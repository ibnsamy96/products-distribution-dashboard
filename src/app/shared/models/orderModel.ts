export class OrderModel {
  constructor(
  public facebookAdminName: string,
  public orderDate,
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
    onDelivery: boolean;
    delivered: boolean;

    rejected: boolean;
  } ,
  public deliveryName ?: string,
  public orderId ?: number,

  ){}
}

