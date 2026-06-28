import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";

export function UserRoute({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return session ? <>{children}</> : <Navigate to="/login" replace />;
}
