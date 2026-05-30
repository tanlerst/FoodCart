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

    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="text-md text-orange-600 font-semibold">
      Logout
    </button>
  );
}
