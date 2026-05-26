/* Signup Page for FoodCart */

import SignupComponent from "../components/auth/SignupComponent";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Join FoodCart!</h1>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Create an account to start your food journey
        </p>
        <SignupComponent />
      </div>
    </main>
  );
}
