import { GoogleLoginButton } from "./googleLoginButton";
import { FC } from "react";

export const Login: FC = () => {
  return (
    <div className="mt-32 text-center">
      <GoogleLoginButton />
    </div>
  );
};
