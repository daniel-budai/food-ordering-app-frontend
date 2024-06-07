import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: props) => {
  const { createUser } = useCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to inizialize Auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {};

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;

//2.50
