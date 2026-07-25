/* Bottom navigation bar for user pages. Navigation items include home (menu), wheel, surprise, cart, orders, and profile */

import {
  FerrisWheel,
  Gift,
  House,
  NotepadText,
  ShoppingCart,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type NavigationBarItem = {
  label: string;
  icon: LucideIcon;
  route: string;
  end?: boolean;
};

const NAVIGATION_ITEMS: NavigationBarItem[] = [
  {
    label: "Home",
    icon: House,
    route: "/menu",
    end: true,
  },
  {
    label: "Wheel",
    icon: FerrisWheel,
    route: "/wheelitem",
  },
  {
    label: "Surprise",
    icon: Gift,
    route: "/surprise",
  },
  {
    label: "Cart",
    icon: ShoppingCart,
    route: "/cart",
  },
  {
    label: "Orders",
    icon: NotepadText,
    route: "/orders",
  },
  {
    label: "Profile",
    icon: UserRound,
    route: "/user",
  },
];

const BASE_NAVIGATION_ITEM_CLASS =
  "flex flex-col items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors";

const ACTIVE_NAVIGATION_ITEM_CLASS =
  "text-orange-500";

const INACTIVE_NAVIGATION_ITEM_CLASS =
  "text-gray-500 hover:text-orange-500";

function getNavigationItemClass(isActive: boolean) {
  return `${BASE_NAVIGATION_ITEM_CLASS} ${
    isActive
      ? ACTIVE_NAVIGATION_ITEM_CLASS
      : INACTIVE_NAVIGATION_ITEM_CLASS
  }`;
}

export default function NavigationBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-2 py-2 shadow-sm">
      <ul className="mx-auto flex max-w-md items-center justify-around">
        
        {/* Navigation items */}
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.route}>
              <NavLink
                to={item.route}
                end={item.end}
                className={({ isActive }) =>
                  getNavigationItemClass(isActive)
                }
              >
                <Icon size={22} />

                <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}