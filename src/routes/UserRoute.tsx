import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";
import { getUserType } from "../helpers/auth/getUserType";
import { useState, useEffect } from "react";

export function UserRoute({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const [isUser, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkRole() {
      if (!session?.user) {
        setUser(false);
        setLoading(false);
        return;
      }
      try {
        const usertype = await getUserType(session.user.id);
        setUser(usertype === 1);
      } catch {
        setUser(false);
      } finally {
        setLoading(false);
      }
    }

    checkRole();
  }, [session]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!session || !isUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
