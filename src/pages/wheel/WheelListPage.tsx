import AddMoreItemsButton from "../../components/wheel/AddMoreItemsButton";
import WheelEmptyState from "../../components/wheel/WheelEmptyState";
import WheelItemList from "../../components/wheel/WheelItemList";
import { useWheel } from "../../contexts/WheelContext";
import { MIN_WHEEL_ITEMS } from "../../contexts/WheelContext";
import CancelButton from "../../components/wheel/CancelButton";
import { useNavigate } from "react-router";
import UserLayout from "../../layouts/UserLayout";

export default function WheelListPage() {
  const { items, removeItem, clearItems } = useWheel();
  const navigate = useNavigate();
  const canSpin = items.length >= MIN_WHEEL_ITEMS;

  function handleCancel() {
    navigate("/menu");
  }
  return (
    <UserLayout
      title="Wheel Item List"
      headerAction={<CancelButton onClick={handleCancel} />}
    >
      {items.length === 0 ? (
        <WheelEmptyState onBrowseMenu={() => navigate("/menu")} />
      ) : (
        <>
          <WheelItemList items={items} onRemove={removeItem} onClear={clearItems} />
          
          <AddMoreItemsButton
            onClick={() => navigate("/menu")}
          />

          {/* Spin button */}
          <button
            type="button"
            disabled={!canSpin}
            onClick={() => navigate("/wheel")}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white disabled:bg-gray-300"
          >
            Spin Now
          </button>

          {!canSpin && (
            <p className="mt-3 text-center text-sm text-gray-500">
              Add at least two items to spin the wheel.
            </p>
          )}
        </>

      )}
    </UserLayout>
  );
}