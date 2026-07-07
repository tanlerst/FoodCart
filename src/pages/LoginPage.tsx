/* Login function logic */
import { useNavigate } from "react-router";
import { getUserType } from "../helpers/auth/getUserType";
import { supabase } from "../utils/supabase";
import LoginCard from "../components/auth/LoginCard";
import SignupCard from "../components/auth/SignupCard";
//import HomeButton from "../components/auth/HomeButton";

export default function LoginPage() {
  const navigate = useNavigate();

  async function login(authUserid: string) {
    const usertype = await getUserType(authUserid);
    if (usertype === 1) {
      navigate("/menu");
    } else if (usertype === 2) {
      navigate("/admin");
    } else {
      await supabase.auth.signOut();
      alert("Usertype error");
      return;
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">Welcome Back!</h1>
          </div>

          <p className="text-center text-gray-600 mb-6">Sign in to continue your food journey</p>

          <LoginCard onLogin={login} />

          <SignupCard />
        </div>
      </div>
    </main>
  );
}
