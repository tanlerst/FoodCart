import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "./utils/supabase";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MenuPage from "./pages/MenuPage";
import "./App.css";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminOrderDetailPage from "./pages/admin/AdminOrderDetailsPage";
import AdminAddItemPage from "./pages/admin/AdminNewItemPage";
import UserOrderDetailsPage from "./pages/UserOrderDetailsPage";
import LandingPage from "./pages/LandingPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import { UserRoute } from "./routes/UserRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { AdminRoute } from "./routes/AdminRoute";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={session ? "/menu" : "/landing"} replace />} />

          <Route
            path="/landing"
            element={
              <PublicRoute session={session}>
                <LandingPage />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute session={session}>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute session={session}>
                <SignupPage />
              </PublicRoute>
            }
          />

          <Route
            path="/menu"
            element={
              <UserRoute session={session}>
                <MenuPage />
              </UserRoute>
            }
          />

          <Route path="/food/:id" element={<FoodDetailsPage />} />

          <Route
            path="/cart"
            element={
              <UserRoute session={session}>
                <CartPage />
              </UserRoute>
            }
          />

          <Route
            path="/adminlogin"
            element={
              <PublicRoute session={session}>
                <AdminLoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute session={session}>
                <AdminDashboardPage />
              </AdminRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <AdminRoute session={session}>
                <AdminOrderPage />
              </AdminRoute>
            }
          />

          <Route
            path="/itemdetails"
            element={
              <AdminRoute session={session}>
                <AdminOrderDetailPage />
              </AdminRoute>
            }
          />

          <Route
            path="/additem"
            element={
              <AdminRoute session={session}>
                <AdminAddItemPage />
              </AdminRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <UserRoute session={session}>
                <UserOrderDetailsPage />
              </UserRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
