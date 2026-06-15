/* temp code to show only signup page*/

// import "./App.css";
// import SignupPage from "./pages/SignupPage";

// export default function App() {
//   return <SignupPage />;
// }

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

function ProtectedRoute({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return session ? <>{children}</> : <Navigate to="/login" replace />;
}

function PublicRoute({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return session ? <Navigate to="/menu" replace /> : <>{children}</>;
}

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
          <Route path="/" element={<Navigate to={session ? "/menu" : "/login"} replace />} />

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
              <ProtectedRoute session={session}>
                <MenuPage />
              </ProtectedRoute>
            }
          />

          <Route path="/food/:id" element={<FoodDetailsPage />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute session={session}>
                <CartPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
