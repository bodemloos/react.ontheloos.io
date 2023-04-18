import { Page } from "shared/Layout";
import { InternalErrorResult } from "shared/Result";
import { useRouteError } from "shared/Router";

const HomePage = () => {
  return (
    <Page maxW="1340px" spacing={{ base: 8, lg: 20 }}>
      HOME PAGE
    </Page>
  );
};

export const Component = HomePage;

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (error.status === 404) {
    // return <HomePage error={'404'} />;
  }

  return <InternalErrorResult />;
};
