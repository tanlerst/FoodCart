/**
 *  @file AdminLayout.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This is the shared layout for the admin pages.
 */

import type { ReactNode } from "react";
import AdminSideBar from "../components/admin/AdminSideBar";

type AdminLayoutProps = {
    title: string;
    children: ReactNode;
};

export default function AdminLayout({
    title,
    children,
}: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSideBar />

            <main className="ml-64 min-h-screen bg-orange-50 px-8 py-8">
                <h1 className="mb-6 text-2xl font-bold text-gray-900">
                    {title}
                </h1>

                {children}
            </main>
        </div>
    );
}