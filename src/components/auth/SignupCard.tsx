import { useNavigate } from "react-router";

export default function SignupCard() {
  const navigate = useNavigate();
  return (
    <div className="mt-8 flex bg-orange-50 rounded-2xl p-6 items-center gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">New to FoodCart?</h2>

        <p className="text-gray-600">Create an account to get started!</p>

        <button onClick={() => navigate("/signup")} className="text-orange-600 font-semibold">
          Sign Up →
        </button>
      </div>
    </div>
  );
}
