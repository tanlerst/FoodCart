/* Login function logic */

import { useNavigate } from "react-router";
import LoginCard from "../../components/auth/LoginCard";
import SignupCard from "../../components/auth/SignupCard";
import { getUserType } from "../../helpers/auth/getUserType";
import { supabase } from "../../utils/supabase";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  async function adminLogin(authUserid: string) {
    const usertype = await getUserType(authUserid);

    if (usertype !== 2) {
      await supabase.auth.signOut();
      alert("Please use user login page.");
      return;
    }

    navigate("/admin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Admin Portal</h1>
        </div>

        <p className="text-center text-gray-600 mb-6">Sign in to access your FoodCart admin dashboard</p>

        <LoginCard onLogin={adminLogin} />

        <SignupCard />
      </div>
    </main>
  );
}