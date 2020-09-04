export interface DeliveryMan {
  name: string; // زود باقي البيانات للموزع
  onDeliveryOrders: {
    count: number,
    orders: { id: string, isCounted: boolean }[]
  };
  deliveredOrders: {
    count: number,
    orders: { id: string, isCounted: boolean }[]
  };
  rejectedOrders: {
    count: number,
    orders: { id: string, isCounted: boolean }[]
  };
  // login :{
  //   username: string;
  // }
}


/*


- ماسك الموزّع
- قيد التوصيل \ تم التوصيل \ راجع
- count: عدد الطلبيات الحالية مع الموزع الفلاني
- ids: آيديهات الطلبيات كلها الحالية و القديمة
- انت عايز تصفر ال count بتاع عمليات النهاردة
عايز أظهر للموزع عملياتُه النهاردة و سجلات كل عملياتُه القديمة
..
في صفحة الموزع بتعمل ريكويست لداتا الموزع دا



*/






























