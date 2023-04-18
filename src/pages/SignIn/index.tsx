import { Center } from "@chakra-ui/react";

import { Page } from "shared/Layout";
import { ErrorPageStrategy } from "shared/Result";
import { Navigate } from "shared/Router";

import { useAuthStore, withRequireAnonymous } from "modules/auth/application";
import { SignInForm } from "modules/auth/presentation";

const SignInPage = () => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page maxW="1340px">
      <Center py={{ base: "46%" }}>
        <SignInForm />
      </Center>
    </Page>
  );
};

export const Component = withRequireAnonymous(SignInPage, { to: "/" });

export const ErrorBoundary = ErrorPageStrategy;
