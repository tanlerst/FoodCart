/* User card component on landing page before login */
import { useNavigate } from "react-router";

export default function UserCard() {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-orange-50 text-6xl text-orange-600">
            👥
        </div>

        <h3 className="mt-8 text-3xl font-bold text-gray-900">
            User
        </h3>

        <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-12 flex w-full items-center justify-center gap-3 rounded-xl bg-orange-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
        >
        Continue as User
        
        <span className="text-2xl">
            ›
        </span>
        
        </button>
    </div>
  );
}
