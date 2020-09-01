export class OrderModel {
  // الجاي بيمثّل هل الأوردر اتحاسب عليه الموزع أو لأ
  public isCounted: boolean; //الأساسي بتاعها إنها false و لما يتعمل تصفير تبقى true
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
    public clientPhoneNumber2?: number,
    public orderState?: {
      onDelivery: boolean;
      delivered: boolean;

      rejected: boolean;
    },
    public deliveryName?: string,
    public orderId?: number,

  ) { }
}


/*

أدمن الفيسبوك اللي دخل الأوردر دا
تاريخ تقديم الأوردر
اسم المنتج
سعر المنتج
سعر التوصيل
اسم العميل
بيانات العميل
region دا هيكون سيليكت فيه كل الأماكن الموجودة ف مصر
addressInDetails هيكون هنا العنوان بالتفصيل
حالة الأوردر مش بتتحط أول ما الأدمن يحطها.. بتتحدد لما يتحدد الراجل اللي هيوصّله..
deliveryName اسم الراجل اللي هيوصله

*/
