import {
  RefreshCcw,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import WheelResultCard from "../../components/wheel/ResultCard";
import { SELECTED_ITEM } from "../../data/sampleWheelItems"
import CancelButton from "../../components/wheel/CancelButton";

// TODO: hard coded value
const selectedItem = SELECTED_ITEM;

export default function WheelResultPage() {

  function handleAddToCart() {
    // TODO: add logic

  }

  function handleCancel() {
  
  }

  return (
    <main className="min-h-screen bg-orange-50/40 px-4 pb-28 pt-6">
      <div className="mx-auto max-w-md">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Spin Result
          </h1>
            <CancelButton onClick={handleCancel}/>
        </header>

        <section className="mt-10 text-center">
          <Sparkles
            size={36}
            className="mx-auto text-orange-500"
          />

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Here is the selected food!
          </h2>

        </section>

        {/* Selected food card */}
        <WheelResultCard item={selectedItem} />

        <div className="mt-8 grid grid-cols-2 gap-3">
          {/* Spin again button */}
          <button
            type="button"
            onClick={() => 1} // TODO: navigate to spin wheel page
            className="flex items-center justify-center gap-2 rounded-xl border border-orange-500 bg-white px-4 py-4 text-sm font-semibold text-orange-600"
          >
            <RefreshCcw size={18} />
            Spin Again
          </button>

          {/* Add selected item to cart button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-4 text-sm font-semibold text-white"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>

        {/* Back to wheel item list button */}
        <button
          type="button"
          onClick={() => 1} // TODO: navigate to wheel item page
          className="mt-4 w-full rounded-xl px-5 py-3 text-sm font-semibold text-gray-700 bg-orange-200"
        >
          Back to Wheel Item List
        </button>
      </div>
    </main>
  );
}