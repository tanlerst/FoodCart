/* Landing page before login to allow user to either select admin or user login */

import AdminCard from "../components/landing/AdminCard";
import UserCard from "../components/landing/UserCard";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* App name */}
        <h1 className="text-6xl font-extrabold tracking-tight">
          <span className="text-orange-600">FoodCart</span>
        </h1>

        {/* Welcome text */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Welcome!</h2>

          <p className="mt-3 text-lg text-gray-600">Please choose how you want to continue</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <UserCard></UserCard>

          <AdminCard></AdminCard>
        </div>
      </section>
    </main>
  );
}
