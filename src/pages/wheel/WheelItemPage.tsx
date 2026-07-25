import AddMoreItemsButton from "../../components/wheel/AddMoreItemsButton";
import WheelEmptyState from "../../components/wheel/WheelEmptyState";
import WheelItemList from "../../components/wheel/WheelItemList";
import { useWheel } from "../../contexts/WheelContext";
import { SAMPLE_WHEEL_ITEMS } from "../../data/sampleWheelItems";
import { MIN_WHEEL_ITEMS } from "../../contexts/WheelContext";
import CancelButton from "../../components/wheel/CancelButton";
import { useNavigate } from "react-router";

export default function WheelListPage() {
  const { items, removeItem, clearItems } = useWheel();
  const navigate = useNavigate();
  const eligibleItems = SAMPLE_WHEEL_ITEMS;
  const canSpin = eligibleItems.length >= MIN_WHEEL_ITEMS;

  function handleCancel() {
    navigate("/menu");
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-orange-50/40 px-4 pb-28 pt-6">
        <div className="mx-auto max-w-md">
          <header>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Wheel Item List</h1>

              <CancelButton onClick={handleCancel} />
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-600">
              Add your favourite items to the wheel and let it decide what you should eat
            </p>
          </header>

          {/* Empty state */}
          <WheelEmptyState onBrowseMenu={() => navigate("/menu")} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50/40 px-4 pb-28 pt-6">
      <div className="mx-auto max-w-md">
        <header>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Wheel Item List</h1>

            <CancelButton onClick={handleCancel} />
          </div>

          <p className="mt-6 text-sm leading-6 text-gray-600">
            Add your favourite items to the wheel and let it decide what you should eat
          </p>
        </header>

        {/* Wheel items */}
        <WheelItemList items={items} onRemove={removeItem} onClear={clearItems} />

        <AddMoreItemsButton
          onClick={() => navigate("/menu")}
          disabled={items.length < MIN_WHEEL_ITEMS}
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
      </div>
    </main>
  );
}
