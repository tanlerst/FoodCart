import { CircleDollarSign, LayoutGrid, MessageSquareText, Utensils, Users } from "lucide-react";

import SurpriseSummaryRow from "./ConfirmSurpriseSummaryRow";

type SurpriseSummaryCardProps = {
  amount: number;
  budget: number;
  dietaryPreferences: string[];
  categories: string[];
  remark: string;
};

export default function ConfirmSurpriseSummaryCard({
  amount,
  budget,
  dietaryPreferences,
  categories,
  remark,
}: SurpriseSummaryCardProps) {
  const dietaryText = dietaryPreferences.length > 0 ? dietaryPreferences.join(", ") : "None";

  const categoryText = categories.length > 0 ? categories.join(", ") : "All Categories";

  const remarkText = remark.trim() || "No remark";

  return (
    <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <SurpriseSummaryRow
        icon={<Users size={25} strokeWidth={2} />}
        label="Number of meals"
        value={`${amount}`}
      />

      <SurpriseSummaryRow
        icon={<CircleDollarSign size={25} strokeWidth={2} />}
        label="Budget"
        value={`Up to $${budget} each`}
      />

      <SurpriseSummaryRow
        icon={<Utensils size={25} strokeWidth={2} />}
        label="Dietary Preferences"
        value={dietaryText}
      />

      <SurpriseSummaryRow
        icon={<LayoutGrid size={25} strokeWidth={2} />}
        label="Categories"
        value={categoryText}
      />

      <SurpriseSummaryRow
        icon={<MessageSquareText size={25} strokeWidth={2} />}
        label="Remark"
        value={remarkText}
        showDivider={false}
      />
    </section>
  );
}
