/* Navigation bar component for the main menu
1. home
2. categories
3. cart
4. orders
5. profile

*/

/* currently hardcoded to categories being selected */
import home from "../../assets/menu/navigation_bar/home_grey.png";
import categories from "../../assets/menu/navigation_bar/categories_orange.png";
import cart from "../../assets/menu/navigation_bar/cart_grey.png";
import orders from "../../assets/menu/navigation_bar/order_grey.png";
import profile from "../../assets/menu/navigation_bar/user_grey.png";

function NavigationItem({ imgSrc, label }: { imgSrc: string; label: string }) {
  return (
    <button className="nav-item flex flex-col items-center gap-1">
      <img src={imgSrc} alt={label} className="w-6 h-6" />
      <span className="text-xs">{label}</span>
    </button>
  );
}

export default function NavigationBar() {
  return (
    <div className="navigation-bar text-gray p-4 mt-6 border-t">
      <ul className="flex justify-around">
        <li>
          <NavigationItem imgSrc={home} label="Home" />
        </li>
        <li>
          <NavigationItem imgSrc={categories} label="Categories" />
        </li>
        <li>
          <NavigationItem imgSrc={cart} label="Cart" />
        </li>
        <li>
          <NavigationItem imgSrc={orders} label="Orders" />
        </li>
        <li>
          <NavigationItem imgSrc={profile} label="Profile" />
        </li>
      </ul>
    </div>
  );
}
