export interface Order {
  id?: string;

  client: {
    name: string;
    phoneNumber1: number;
    phoneNumber2: number;
    address: {
      region: string;
      addressInDetails: string;
    };
  };

  product: {
    id: string;
    name: string;
    price: number;
  };

  orderDate: number; // تاريخ إضافة الأوردر
  deliveryCost: number;

  orderState?: {
    onDelivery: boolean;
    delivered: boolean;
    rejected: boolean;
  };

  // الجاي بيمثّل هل الأوردر اتحاسب عليه الموزع أو لأ
  isCounted: boolean; // الأساسي بتاعها إنها false و لما يتعمل تصفير تبقى true
  facebookAdminName: { id: string, name: string }; // الراجل اللي ضاف الأوردر دا;
  deliveryManName: { id: string, name: string }; // الراجل اللي بيوزع الأوردر دا;
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
