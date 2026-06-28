import type { OrderStatus } from "../../../types/orderDetails";
import { IoMdInformationCircleOutline } from "react-icons/io";
import StatusLine from "./StatusLine";
import StatusStep from "./StatusStep";

type OrderStatusTrackerProps = {
  status: OrderStatus;
};

const RECEIVED_MESSAGE = "Your order has been received. We will start preparing soon.";
const PREPARING_MESSAGE = "Your order is being prepared. We will serve once items are ready.";
const SERVING_MESSAGE = "Some items have been served. Remaining items are still being prepared.";
const COMPLETE_MESSAGE = "All items have been served. Please proceed to payment.";
const PAID_MESSAGE = "Your order is complete and payment has been received.";

export default function OrderStatusTracker({ status }: OrderStatusTrackerProps) {
  const isReceived =
    status === "received" ||
    status === "preparing" ||
    status === "serving" ||
    status === "complete" ||
    status === "paid";
  const isPreparing =
    status === "preparing" || status === "serving" || status === "complete" || status === "paid";
  const isServing = status === "serving" || status === "complete" || status === "paid";
  const isComplete = status === "complete" || status === "paid";
  const isPaid = status === "paid";

  function getStatusMessage() {
    if (status === "received") {
      return RECEIVED_MESSAGE;
    } else if (status === "preparing") {
      return PREPARING_MESSAGE;
    } else if (status === "serving") {
      return SERVING_MESSAGE;
    } else if (status === "complete") {
      return COMPLETE_MESSAGE;
    } else if (status === "paid") {
      return PAID_MESSAGE;
    }
  }

  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md">
      <h2 className="mb-5 text-xl font-bold text-gray-900">Order Status</h2>

      <div className="flex items-center justify-between">
        <StatusStep icon="🧾" label="Received" active={isReceived} />

        <StatusLine active={isPreparing} />

        <StatusStep icon="🍳" label="Preparing" active />

        <StatusLine active={isServing} />

        <StatusStep icon="🍽️" label="Serving" active={isServing} />

        <StatusLine active={isComplete} />

        <StatusStep icon="✅" label="Complete" active={isComplete} />

        <StatusLine active={isPaid} />

        <StatusStep icon="💳" label="Paid" active={isPaid} />
      </div>

      <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm text-gray-800">
        <div className="flex gap-3">
          <span className="text-xl text-orange-600">
            <IoMdInformationCircleOutline />
          </span>

          <p>{getStatusMessage()}</p>
        </div>
      </div>
    </div>
  );
}
