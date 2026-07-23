import { useState } from "react";
import IncludeDrinksOption from "../../components/wheel/IncludeDrinkOption";
import SpinWheel from "../../components/wheel/SpinWheel";
import type { WheelItem } from "../../types/wheelItem";
import { SAMPLE_WHEEL_ITEMS } from "../../data/sampleWheelItems"

// TODO: replace sample item with helper function
const SAMPLE_ITEMS: WheelItem[] = SAMPLE_WHEEL_ITEMS;

export default function SpinWheelPage() {
  const [includeDrinks, setIncludeDrinks] = useState(true);

  function handleSpinComplete() {

  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 pb-28 pt-6">
      <div className="mx-auto max-w-md">
        <header>
          <h1 className="text-2xl font-bold text-gray-900">
            Spin the Wheel
          </h1>
        </header>
        
        <div className="mt-15 mb-10 space-y-4">
          <SpinWheel 
            items={SAMPLE_ITEMS} 
            onSpinComplete={handleSpinComplete}/>
        </div>
        
        <IncludeDrinksOption
          checked={includeDrinks}
          onChange={setIncludeDrinks}
        />
      </div>
    </main>
  );
}