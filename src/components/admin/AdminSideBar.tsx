/* Admin portal navigation bar */

import LogoutButton from "../../components/admin/LogoutButton";
import { useNavigate } from "react-router";
import NavigationItem from "../common/NavigationItem";

type SidebarItem = {
  label: string;
  icon: string;
  route: string;
};

const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: "📊",
    route: "/admin",
  },
  {
    label: "Orders",
    icon: "🛒",
    route: "/admindetails",
  },
  {
    label: "Menu",
    icon: "📖",
    route: "/additem",
  },
];

const ACTIVE_BAR_FORMAT = "bg-orange-50 text-orange-600";
const INACTIVE_BAR_FORMAT = "text-gray-600 hover:bg-orange-50 hover:text-orange-600";

export default function AdminSideBar() {
  const navigate = useNavigate();
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-orange-100 bg-white px-4 py-6">
      {/* Side Bar */}
      <nav className="flex flex-1 flex-col gap-2">
        {sidebarItems.map((item, index) => (
          <button
            key={item.label}
            className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition ${
              index === 0 ? ACTIVE_BAR_FORMAT : INACTIVE_BAR_FORMAT
            }`}
            onClick={() => navigate(item.route)}
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <LogoutButton />
    </aside>
  );
}
