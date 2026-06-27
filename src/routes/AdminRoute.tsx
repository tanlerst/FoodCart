import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";
import { getUserType } from "../helpers/auth/getUserType";
import { useState, useEffect } from "react";

export function AdminRoute({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const [isAdmin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkRole() {
      if (!session?.user) {
        setAdmin(false);
        setLoading(false);
        return;
      }
      try {
        const usertype = await getUserType(session.user.id);
        console.log(usertype);
        setAdmin(usertype === 2);
      } catch {
        setAdmin(false);
      } finally {
        setLoading(false);
      }
    }

    checkRole();
  }, [session]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/adminlogin" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/menu" replace />;
  }

  return <>{children}</>;
}
