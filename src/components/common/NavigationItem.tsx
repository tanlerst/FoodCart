/* Navigation Item to be used by navigation bar*/
type NavigationItemProps = {
  icon: string;
  label: string;
  onClick?: () => void;
};

export default function NavigationItem({ icon, label, onClick }: NavigationItemProps) {
  return (
    <button className="nav-item flex flex-col items-center gap-1" onClick={onClick}>
      <span className="text-xl">{icon}</span>

      <span className="text-xs">{label}</span>
    </button>
  );
}
