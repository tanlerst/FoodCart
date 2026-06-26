/* Line in between status under status tracker component */

type StatusLineProps = {
  active: boolean;
};

const ACTIVE_LINE = "bg-orange-600" 
const INACTIVE_LINE =  "border-t border-dashed border-gray-300" // dashed gray line

export default function StatusLine({ active }: StatusLineProps) {
  return (
    <div
        className={`mx-2 h-[2px] flex-1 ${
            active ? ACTIVE_LINE
                    : INACTIVE_LINE
            }`
        }
    />
  );
}