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
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminAddItemPage from "./pages/admin/AdminNewItemPage";
import UserOrderDetailsPage from "./pages/UserOrderDetailsPage";
import AdminDashboardPage from "./pages/admin/dashboard/AdminDashboardPage";
import { UserRoute } from "./routes/UserRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { AdminRoute } from "./routes/AdminRoute";
import { getRoute } from "./helpers/auth/getRoute";
import FoodRecommendationPage from "./pages/FoodRecommendationPage";
import AdminMenuPage from "./pages/admin/AdminMenuPage";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);

      if (data.session?.user) {
        try {
          setRoute(await getRoute(data.session.user.id));
        } catch (error) {
          await supabase.auth.signOut();
          setSession(null);
          setRoute(null);
        }
      } else {
        setRoute(null);
      }
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
          <Route
            path="/"
            element={
              <Navigate
                to={session ? (route === "/admin" ? "admin" : "/menu") : "/login"}
                replace
              />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute session={session} route={route}>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute session={session} route={route}>
                <SignupPage />
              </PublicRoute>
            }
          />

          <Route
            path="/recommendations"
            element={
              <UserRoute session={session}>
                <FoodRecommendationPage />
              </UserRoute>
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

          <Route
            path="/food/:id"
            element={
              <UserRoute session={session}>
                <FoodDetailsPage />
              </UserRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <UserRoute session={session}>
                <CartPage />
              </UserRoute>
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
            path="/adminorders"
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
                <AdminOrderDetailsPage />
              </AdminRoute>
            }
          />

          <Route
            path="/adminmenu"
            element={
              <AdminRoute session={session}>
                <AdminMenuPage />
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
