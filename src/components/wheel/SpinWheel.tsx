import { useMemo, useState } from "react";
import { Wheel } from "react-custom-roulette";

import type { WheelItem } from "../../types/wheelItem";

type SpinWheelProps = {
  items: WheelItem[];
  onSpinComplete: (selectedItem: WheelItem) => void;
};

const SEGMENT_COLOURS = ["#fff7ed", "#ffedd5", "#fef3c7", "#fff1e6"];

const OUTER_BORDER_COLOUR = "#fb923c";
const INNER_BORDER_COLOUR = "#fed7aa";
const RADIUS_LINE_COLOUR = INNER_BORDER_COLOUR;
const WHEEL_TEXT_FONT_SIZE = 16;
const WHEEL_SPIN_DURATION = 0.8;

export default function SpinWheel({ items, onSpinComplete }: SpinWheelProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const wheelData = useMemo(
    () =>
      items.map((item) => ({
        option: item.name,
      })),
    [],
  );

  function handleSpin() {
    // TODO: spin logic
  }

  function handleStopSpinning() {
    // TODO: stop spinning and update selected item
  }

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-full overflow-hidden mb-10">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelData}
          onStopSpinning={handleStopSpinning}
          backgroundColors={SEGMENT_COLOURS}
          outerBorderColor={OUTER_BORDER_COLOUR}
          outerBorderWidth={3}
          innerBorderColor={INNER_BORDER_COLOUR}
          innerBorderWidth={3}
          radiusLineColor={RADIUS_LINE_COLOUR}
          radiusLineWidth={3}
          fontSize={WHEEL_TEXT_FONT_SIZE}
          spinDuration={WHEEL_SPIN_DURATION}
        />
      </div>

      {/* Spin button */}
      <button
        type="button"
        onClick={handleSpin}
        disabled={mustSpin}
        className="mt-6 w-full rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-300"
      >
        {mustSpin ? "Spinning..." : "Spin Now"}
      </button>
    </section>
  );
}
