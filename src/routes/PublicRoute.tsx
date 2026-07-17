import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";

export function PublicRoute({
  session,
  children,
  route,
}: {
  session: Session | null;
  children: React.ReactNode;
  route: string | null;
}) {
  if (!session) {
    return <>{children}</>;
  }

  if (!route) {
    return null;
  }
  return <Navigate to={route} replace />;
}
