import SpinWheel from "../../components/wheel/SpinWheel";
import { useWheel } from "../../contexts/WheelContext";
import CancelButton from "../../components/wheel/CancelButton";
import { useNavigate } from "react-router";
import type { WheelItem } from "../../types/wheelItem";

export default function SpinWheelPage() {
  const navigate = useNavigate();
  const { items, setSelectedItem } = useWheel();
  function handleSpinComplete(item: WheelItem) {
    setSelectedItem(item);
    navigate("/wheelresult");
  }

  function handleCancel() {
    navigate("/menu");
  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 pb-28 pt-6">
      <div className="mx-auto max-w-md">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Spin the Wheel</h1>

          <CancelButton onClick={handleCancel} />
        </header>

        <div className="mt-15 mb-10 space-y-4">
          <SpinWheel items={items} onSpinComplete={handleSpinComplete} />
        </div>
      </div>
    </main>
  );
}
