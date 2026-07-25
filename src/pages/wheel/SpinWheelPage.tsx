import SpinWheel from "../../components/wheel/SpinWheel";
import type { WheelItem } from "../../types/wheelItem";
import { SAMPLE_WHEEL_ITEMS } from "../../data/sampleWheelItems";
import CancelButton from "../../components/wheel/CancelButton";

// TODO: replace sample item with helper function
const SAMPLE_ITEMS: WheelItem[] = SAMPLE_WHEEL_ITEMS;

export default function SpinWheelPage() {

  function handleSpinComplete() {

  }

  function handleCancel() {

  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 pb-28 pt-6">
      <div className="mx-auto max-w-md">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Spin the Wheel
          </h1>

          <CancelButton onClick={handleCancel} />
        </header>
        
        <div className="mt-15 mb-10 space-y-4">
          <SpinWheel 
            items={SAMPLE_ITEMS} 
            onSpinComplete={handleSpinComplete}/>
        </div>

      </div>
    </main>
  );
}