import { ReactNode } from "react";

import { Navigate } from "shared/Router";

import { useAuthStore } from "./authStore";

export interface IRequireAnonymousProps {
  children: ReactNode;
  to?: string;
}

const RequireAnonymous = ({ children, to }: IRequireAnonymousProps) => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  return isAuthenticated ? <Navigate to={to ?? "/"} /> : <>{children}</>;
};

export { RequireAnonymous };
