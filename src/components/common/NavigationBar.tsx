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
import NavigationItem from "./NavigationItem";
import { useNavigate } from "react-router-dom";
/*
type NavigationItemProps = {
  imgSrc: string;
  label: string;
  onClick?: () => void;
};

function NavigationItem({ imgSrc, label, onClick }: NavigationItemProps) {
  return (
    <button className="nav-item flex flex-col items-center gap-1" onClick={onClick}>
      <img src={imgSrc} alt={label} className="w-6 h-6" />
      <span className="text-xs">{label}</span>
    </button>
  );
}
*/
export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar text-gray p-4 mt-6 border-t">
      <ul className="flex justify-around">
        <li>
          <NavigationItem icon={home} label="Home" onClick={() => navigate("/menu")} />
        </li>
        <li>
          <NavigationItem icon={categories} label="Categories" onClick={() => navigate("/menu")} />
        </li>
        <li>
          <NavigationItem icon={cart} label="Cart" onClick={() => navigate("/cart")} />
        </li>
        <li>
          <NavigationItem icon={orders} label="Orders" onClick={() => navigate("/orders")} />
        </li>
        <li>
          <NavigationItem icon={profile} label="Profile" onClick={() => navigate("/profile")} />
        </li>
      </ul>
    </div>
  );
}
