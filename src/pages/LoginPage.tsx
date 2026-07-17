/* Login function logic */
import { useNavigate } from "react-router";
import { getRoute } from "../helpers/auth/getRoute";
import { supabase } from "../utils/supabase";
import LoginCard from "../components/auth/LoginCard";
import SignupCard from "../components/auth/SignupCard";

export default function LoginPage() {
  const navigate = useNavigate();

  async function login(authUserid: string) {
    try {
      const route = await getRoute(authUserid);
      navigate(route);
    } catch (error) {
      await supabase.auth.signOut();
      alert(error instanceof Error ? error.message : "Usertype error");
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
