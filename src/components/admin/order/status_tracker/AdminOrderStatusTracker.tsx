import type { OrderStatus } from "../../../../types/order";
import { IoMdInformationCircleOutline } from "react-icons/io";
import StatusLine from "./AdminStatusLine";
import StatusStep from "./AdminStatusStep";

type AdminOrderStatusTrackerProps = {
  status: OrderStatus;
};

const RECEIVED_MESSAGE = "Your order has been received. We will start preparing soon.";
const PREPARING_MESSAGE = "Your order is being prepared. We will serve once items are ready.";
const SERVING_MESSAGE = "Some items have been served. Remaining items are still being prepared.";
const SERVED_MESSAGE = "All items have been served. Please proceed to payment.";
const PAID_MESSAGE = "Your order is complete and payment has been received.";
const COMPLETE_MESSAGE = "Payment is received. Order completed";

export default function AdminOrderStatusTracker({ status }: AdminOrderStatusTrackerProps) {
  const isReceived =
    status === "received" ||
    status === "preparing" ||
    status === "serving" ||
    status === "served" ||
    status === "paid" ||
    status === "complete";

  const isPreparing =
    status === "preparing" ||
    status === "serving" ||
    status === "served" ||
    status === "paid" ||
    status === "complete";
  const isServing =
    status === "serving" || status === "served" || status === "paid" || status === "complete";
  const isServed = status === "served" || status === "paid" || status === "complete";
  const isPaid = status === "paid" || status === "complete";
  const isComplete = status === "complete";

  function getStatusMessage() {
    if (status === "received") {
      return RECEIVED_MESSAGE;
    } else if (status === "preparing") {
      return PREPARING_MESSAGE;
    } else if (status === "serving") {
      return SERVING_MESSAGE;
    } else if (status === "served") {
      return SERVED_MESSAGE;
    } else if (status === "paid") {
      return PAID_MESSAGE;
    } else if (status === "complete") {
      return COMPLETE_MESSAGE;
    }
  }

  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md">
      <h2 className="mb-5 text-xl font-bold text-gray-900">Order Status</h2>

      <div className="flex items-center justify-between">
        <StatusStep icon="🧾" label="Received" active={isReceived} />

        <StatusLine active={isPreparing} />

        <StatusStep icon="🍳" label="Preparing" active={isPreparing} />

        <StatusLine active={isServing} />

        <StatusStep icon="🍽️" label="Serving" active={isServing} />

        <StatusLine active={isServed} />

        <StatusStep icon="🍽️" label="Served" active={isServed} />

        <StatusLine active={isPaid} />

        <StatusStep icon="💳" label="Paid" active={isPaid} />

        <StatusLine active={isComplete} />

        <StatusStep icon="✅" label="Complete" active={isComplete} />
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
