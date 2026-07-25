import type { ReactNode } from "react";
import NavigationBar from "../components/common/NavigationBar";
import LogoutButton from "../components/auth/LogoutButton";

type UserLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function UserLayout({
  title,
  children,
}: UserLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-24 pt-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            {title}
          </h1>

          <LogoutButton />
        </header>

        {children}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-md">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}