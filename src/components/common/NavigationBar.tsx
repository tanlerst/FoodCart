/* Navigation bar component for the main menu
1. home
2. categories
3. cart
4. orders
5. profile

*/

import NavigationItem from "./NavigationItem";
import { IoHomeOutline } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar text-gray p-4 mt-6 border-t">
      <ul className="flex justify-around">
        <li>
          <NavigationItem icon={IoHomeOutline} label="Home" onClick={() => navigate("/menu")} />
        </li>
        <li>
          <NavigationItem icon={BiSolidCategoryAlt} label="Categories" onClick={() => navigate("/menu")} />
        </li>
        <li>
          <NavigationItem icon={FaShoppingCart} label="Cart" onClick={() => navigate("/cart")} />
        </li>
        <li>
          <NavigationItem icon={CgNotes} label="Orders" onClick={() => navigate("/orders")} />
        </li>
        <li>
          <NavigationItem icon={IoPerson} label="Profile" onClick={() => navigate("/profile")} />
        </li>
      </ul>
    </div>
  );
}
