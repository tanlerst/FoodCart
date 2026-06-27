/* Signup Page for FoodCart */

import SignupComponent from "../components/auth/SignupComponent";
import SigninButton from "../components/auth/SigninButton"
import HomeButton from "../components/auth/HomeButton"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Home button */}
      <div className="absolute left-8 top-8">
        <HomeButton />
      </div>

      <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Join FoodCart!</h1>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Create an account to start your food journey
        </p>
        <SignupComponent />

        <div className="mt-6 text-center">
          <p> Already have an account? </p>
          <SigninButton />
        </div>
      </div>
      </div>
    </main>
  );
}
