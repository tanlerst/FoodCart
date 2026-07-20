import { Check } from "lucide-react";

export default function OrderSuccessBanner() {
  return (
    <section className="mt-10 text-center">
      <div className="relative mx-auto flex h-56 items-center justify-center">
        
        {/* Decorations */}
        <span className="absolute left-12 top-12 text-2xl text-orange-500">
          ✦
        </span>

        <span className="absolute right-16 top-10 text-2xl text-gray-300">
          ✦
        </span>

        <span className="absolute left-4 top-28 text-3xl text-gray-300">
          ✦
        </span>

        <span className="absolute right-8 top-32 text-3xl text-orange-500">
          ✦
        </span>

        <span className="absolute left-10 bottom-12 text-3xl text-green-500">
          ✦
        </span>

        <span className="absolute right-12 bottom-12 text-3xl text-green-500">
          ✦
        </span>

        {/* Order Placed Icon */}
        <div className="flex size-60 items-center justify-center rounded-full bg-green-50">
          <div className="flex size-24 items-center justify-center rounded-full bg-white shadow-sm">
            <Check
              size={80}
              strokeWidth={5}
              className="text-green-500"
            />
          </div>
        </div>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-gray-950">
        Your surprise is on the way!
      </h2>

    </section>
  );
}