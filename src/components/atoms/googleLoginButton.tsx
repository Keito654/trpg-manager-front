import { FC } from "react";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export const GoogleLoginButton: FC = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};
