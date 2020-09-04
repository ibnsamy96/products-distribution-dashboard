export interface Order {
  id?: string;
  // الجاي بيمثّل هل الأوردر اتحاسب عليه الموزع أو لأ
  isCounted: boolean; // الأساسي بتاعها إنها false و لما يتعمل تصفير تبقى true
  facebookAdminName: string;
  orderDate: number;
  itemName: string;
  itemCost: number;
  deliveryCost: number;
  clientName: string;
  clientPhoneNumber1: number;
  address: {
    region: string;
    addressInDetails: string;
  };
  clientPhoneNumber2?: number;
  orderState?: {
    onDelivery: boolean;
    delivered: boolean;

    rejected: boolean;
  };
  deliveryName?: string;
  orderId?: number;
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
