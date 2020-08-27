// tslint:disable-next-line: semicolon

export class OrderModel {
  public orderId: number;
  public facebookAdminName: string;
  public orderDate: Date;
  public deliveryName: string;
  public itemName: string;
  public itemCost: number;
  public delivryCost: number;
  public clientName: string;
  public clientPhoneNumber1: number;
  public clientPhoneNumber2: number;
  // tslint:disable-next-line: align
  public address: {
    region: string;
    addressInDetails: string;
  };
  public orderState: {
    onDelivry: boolean;
    delvired: boolean;
    rejected: boolean;
  };
}

