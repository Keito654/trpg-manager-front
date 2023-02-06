import { GoogleLoginButton } from "components/atoms/button/googleLoginButton";
import { FC } from "react";

export const Login: FC = () => {
  return (
    <div className="mx-auto mt-32 w-96">
      <GoogleLoginButton />
    </div>
  );
};
