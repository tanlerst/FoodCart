import type { WheelItem } from "../../types/wheelItem";

type WheelResultCardProps = {
  item: WheelItem;
};

export default function WheelResultCard({
  item,
}: WheelResultCardProps) {
  return (
    <article className="mt-8 overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        className="aspect-square w-full rounded-2xl object-cover"
      />

      <div className="px-2 pb-2 pt-5 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {item.name}
        </h2>

        <p className="mt-2 text-lg font-semibold text-gray-800">
          ${item.price}
        </p>
      </div>
    </article>
  );
}