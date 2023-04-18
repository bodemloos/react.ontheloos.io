// eslint-disable-next-line no-restricted-imports
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";

import { Layout } from "shared/Layout";
import { NotFoundResult, InternalServerErrorResult } from "shared/Result";
import { useRouteError } from "shared/Router";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        lazy: () => import("./Dashboard"),
      },
      {
        path: "/sign-in",
        lazy: () => import("./SignIn"),
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

function ErrorBoundary() {
  let error = useRouteError();
  if (error.status === 404) {
    return <NotFoundResult />;
  }
  return <InternalServerErrorResult />;
}
