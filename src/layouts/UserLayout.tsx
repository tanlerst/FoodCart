import type { ReactNode } from "react";
import NavigationBar from "../components/common/NavigationBar";

type UserLayoutProps = {
  title: string;
  children: ReactNode;
  headerAction?: ReactNode;
};

export default function UserLayout({
  title,
  children,
  headerAction,
}: UserLayoutProps) {
  return (
    <div className="min-h-screen bg-orange-50/40">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-6">
        <header className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {title}
          </h1>

          {headerAction}
        </header>

        {children}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="mx-auto w-full max-w-md">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}