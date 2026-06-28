/* Admin portal navigation bar */

import LogoutButton from "../../components/admin/LogoutButton";
import { NavLink } from "react-router";

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
    route: "/orders",
  },
  {
    label: "Menu",
    icon: "📖",
    route: "/additem",
  },
];

const BASE_BAR_FORMAT =
  "flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition";
const ACTIVE_BAR_FORMAT = "bg-orange-50 text-orange-600";
const INACTIVE_BAR_FORMAT = "text-gray-600 hover:bg-orange-50 hover:text-orange-600";

function getSidebarItemClass(isActive: boolean) {
  const baseBarFormat = BASE_BAR_FORMAT;
  const barFormat = isActive ? ACTIVE_BAR_FORMAT : INACTIVE_BAR_FORMAT;

  return `${baseBarFormat} ${barFormat}`;
}

export default function AdminSideBar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-orange-100 bg-white px-4 py-6">
      {/* Side Bar */}
      <nav className="flex flex-1 flex-col gap-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.route} // navigation
            className={({ isActive }) => getSidebarItemClass(isActive)}
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <LogoutButton />
    </aside>
  );
}
