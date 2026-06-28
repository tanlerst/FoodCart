/* Home button for login and signup page that directs to landing page*/

import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate("/landing")}
      className="flex items-center gap-4 rounded-2xl border border-orange-200 bg-white px-8 py-4 text-xl font-semibold text-orange-950 shadow-sm transition hover:bg-orange-50"
    >
      <IoHomeOutline />

      <span>Home</span>
    </button>
  );
}
