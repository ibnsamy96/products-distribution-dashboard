// tslint:disable-next-line: semicolon

export class OrderModel {

  public facebookAdminName: string;
  public orderDate: Date;
  public deliveryName: string;
  public itemName: string;
  public itemCost: number;
  public deliveryCost: number;
  public clientName: string;
  public clientPhoneNumber: number;
  // tslint:disable-next-line: align
  public address: {
    region: string,
    addressInDetails: string

  };
  public orderState: {
    onDelivery: boolean,
    delivered: boolean,
    rejected: boolean
  };



}
