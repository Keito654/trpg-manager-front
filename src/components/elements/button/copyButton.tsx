import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

export const CopyButton: FC<IconButtonProps> = (props) => (
  <IconButton {...props}>
    <ContentCopyIcon />
  </IconButton>
);
