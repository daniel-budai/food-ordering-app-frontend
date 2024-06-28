import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusHeader from "@/components/OrderStatusHeader";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!orders || orders.length === 0) {
    return "no orders found";
  }
  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-200 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
