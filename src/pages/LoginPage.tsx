/* Login function logic */
import { useNavigate } from "react-router";
import LoginCard from "../components/auth/LoginCard";
import SignupCard from "../components/auth/SignupCard";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome Back!
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Sign in to continue your food journey
        </p>

        <LoginCard
          onLogin={() => {
            navigate("/menu");
          }}
        />

        <SignupCard />
      </div>
    </main>
  );
}
