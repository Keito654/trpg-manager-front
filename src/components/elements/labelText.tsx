import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LabelText: FC<Props> = ({ children }) => {
  return (
    <Typography sx={{ mb: 1.25, fontSize: "large" }}>{children}</Typography>
  );
};
