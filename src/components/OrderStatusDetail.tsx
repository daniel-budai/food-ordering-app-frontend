import { Order } from "@/types";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col"></div>
    </div>
  );
};

export default OrderStatusDetail;
