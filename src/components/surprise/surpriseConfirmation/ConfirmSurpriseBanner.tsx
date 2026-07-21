import { Gift } from "lucide-react";

export default function SurpriseBanner() {
  return (
    <section className="mt-6 rounded-3xl bg-gradient-to-br from-orange-50 via-[#fff9f1] to-orange-100 px-6 py-8 text-center">
      <div className="relative mx-auto flex h-24 w-40 items-center justify-center">
        {/* icon */}
        <div className="flex size-20 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
          <Gift size={67} strokeWidth={2} />
        </div>

        {/* top */}
        <span className="absolute left-1 top-8 text-4xl text-orange-400">✦</span>

        <span className="absolute left-3 top-0 text-2xl text-orange-200">✦</span>

        <span className="absolute right-6 top-1 text-2xl text-stone-300">✦</span>

        <span className="absolute top-5 right-4 text-lg text-stone-200">✦</span>

        <span className="absolute left-5 top-5 text-lg text-orange-300">✦</span>

        {/* bottom */}
        <span className="absolute right-1 top-9 text-4xl text-orange-400">✦</span>

        <span className="absolute bottom-0 left-8 text-xl text-stone-300">✦</span>

        <span className="absolute bottom-3 right-5 text-2xl text-orange-200">✦</span>
      </div>

      <h2 className="mt-3 text-2xl font-bold text-gray-950">Ready for a surprise?</h2>
    </section>
  );
}
