import { Button } from "@mui/material";
import { supabase } from "libs/initSupabase";
import { FC } from "react";

export const GoogleLoginButton: FC = () => {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "/",
      },
    });
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        void handleGoogleLogin();
      }}
    >
      Googleでログイン
    </Button>
  );
};
