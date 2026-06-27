/* Navigation Item to be used by navigation bar*/
import type { IconType } from "react-icons";

type NavigationItemProps = {
  icon: string | IconType;
  label: string;
  onClick?: () => void;
};

export default function NavigationItem({ icon, label, onClick }: NavigationItemProps) {
    const isStringIcon = typeof icon === "string";
    const Icon = icon;

    return (
        <button className="nav-item flex flex-col items-center gap-1" onClick={onClick}>
            <span className="text-xl">
                {isStringIcon ? icon : <Icon />}
            </span>

            <span className="text-xs">{label}</span>
        </button>
    );
}
