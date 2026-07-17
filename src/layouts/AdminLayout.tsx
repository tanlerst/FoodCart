/**
 *  @file AdminLayout.tsx
 *  @author Xi Yan 
 *  @version 1.0.1
 *  @description This is the shared layout for the admin pages.
 */

import type { ReactNode } from "react";
import AdminSideBar from "../components/admin/AdminSideBar";

type AdminLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function AdminLayout({
    title,
    description,
    children,
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSideBar />

      <main className="ml-64 min-h-screen bg-orange-50 px-8 py-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm text-gray-500">
              {description}
          </p>
        )}

        {children}
      </main>
    </div>
  );
}