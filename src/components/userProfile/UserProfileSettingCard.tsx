import { ChevronRight, type LucideIcon } from "lucide-react";

type ProfileMenuItemProps = {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "default" | "destructive";
  showDivider?: boolean;
};

export default function ProfileMenuItem({
  title,
  icon: Icon,
  onClick,
  variant = "default",
  showDivider = false,
}: ProfileMenuItemProps) {
  const titleStyle = variant == "destructive" ? "text-red-600" : "text-gray-900";

  const iconStyle =
    variant == "destructive" ? "bg-red-50 text-red-500" : "bg-orange-50 text-orange-500";

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center gap-4 px-5 py-5 text-left"
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconStyle}`}
        >
          <Icon size={22} strokeWidth={1.8} />
        </span>

        <span className="min-w-0 flex-1">
          <span className={`block font-semibold ${titleStyle}`}>{title}</span>
        </span>

        <ChevronRight size={21} className="shrink-0 text-gray-500" />
      </button>

      {showDivider && <div className="mx-5 border-t border-gray-200" />}
    </>
  );
}
