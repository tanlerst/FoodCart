import type { ReactNode } from "react";

type ConfirmSurpriseSummaryRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  showDivider?: boolean;
};

const DIVIDER_STYLE = "border-b border-gray-200";

export default function ConfirmSurpriseSummaryRow({
  icon,
  label,
  value,
  showDivider = true,
}: ConfirmSurpriseSummaryRowProps) {
  return (
    <div
      className={`flex min-h-20 items-center gap-4 px-5 ${
        showDivider ? DIVIDER_STYLE : ""
      }`}
    >
      <div className="shrink-0 text-orange-500">{icon}</div>
      
      {/* summary label */}
      <p className="min-w-0 flex-1 text-base font-semibold text-gray-900">
        {label}
      </p>
      
      {/* summary value */}
      <p className="max-w-[45%] text-right text-sm font-medium leading-5 text-gray-500">
        {value}
      </p>
    </div>
  );
}