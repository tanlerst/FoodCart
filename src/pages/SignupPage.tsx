/* Signup Page for FoodCart */

import SignupComponent from "../components/auth/SignupComponent";
import SigninButton from "../components/auth/SigninButton";
import AuthLayout from "../layouts/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="space-y-4">
        <div className="flex justify-center items-center">
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
    </AuthLayout>
  );
}
