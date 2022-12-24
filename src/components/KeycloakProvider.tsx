// import type { AuthClientTokens } from "@react-keycloak/core";
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import Keycloak, { KeycloakConfig } from "keycloak-js";
import React, { PropsWithChildren, useState } from "react";
import { useEffectAsync } from "../utils/hooks";
import env from "@beam-australia/react-env";
import LoadingKc from "./LoadingKc";

let keycloakInstance: Keycloak;

async function getKeycloakInstance(
  keycloakConfig: KeycloakConfig,
  recreate = false
) {
  const isServerCheck = typeof window === "undefined";
  if (recreate || (!keycloakInstance && !isServerCheck)) {
    const Keycloak = (await import("keycloak-js")).default;
    keycloakInstance = new Keycloak(keycloakConfig);
  }
  return keycloakInstance;
}

const KeycloakProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authClient, authClientSet] = useState<Keycloak>();

  useEffectAsync(async () => {
    // console.log('entrou async')
    const kc = await getKeycloakInstance({
      url: env("KEYCLOAK_URL") || process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: env("KEYCLOAK_REALM") || process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
      clientId:
        env("KEYCLOAK_CLIENT_ID") ||
        process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
    });
    authClientSet(kc);
  }, []);

  return (
    <>
      {authClient && (
        <ReactKeycloakProvider
          authClient={authClient}
          LoadingComponent={<LoadingKc/>}
        >
          {children}
        </ReactKeycloakProvider>
      )}
    </>
  );
};

export default KeycloakProvider;
