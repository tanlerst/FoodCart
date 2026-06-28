/* Status tracker step component received, preparing ...*/

type StatusStepProps = {
  icon: string;
  label: string;
  active: boolean;
};

const ACTIVE_BORDER = "border-orange-600 bg-orange-50 text-orange-600";
const INACTIVE_BORDER = "border-gray-300 bg-white text-gray-400";
const ACTIVE_TEXT = "text-orange-600";
const INACTIVE_TEXT = "text-gray-500";

export default function StatusStep({ icon, label, active }: StatusStepProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border-2 text-2xl ${
          active ? ACTIVE_BORDER : INACTIVE_BORDER
        }`}
      >
        {icon}
      </div>

      <p className={`text-sm font-medium ${active ? ACTIVE_TEXT : INACTIVE_TEXT}`}>{label}</p>
    </div>
  );
}
