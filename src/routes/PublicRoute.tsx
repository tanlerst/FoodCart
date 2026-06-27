import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";

export function PublicRoute({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return session ? <Navigate to="/menu" replace /> : <>{children}</>;
}
