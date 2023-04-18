import { ReactNode } from "react";

import { Navigate } from "shared/Router";

import { useAuthStore } from "./authStore";

export interface IRequireAuthenticatedProps {
  children: ReactNode;
  to?: string;
}

const RequireAuthenticated = ({ children, to }: IRequireAuthenticatedProps) => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to={to ?? "/"} />;
};

export { RequireAuthenticated };
