/* Admin portal logout button */
import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabase";

export default function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/adminlogin");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-500"
    >
      <span className="text-xl">🚪</span>

      <span>Logout</span>
    </button>
  );
}
