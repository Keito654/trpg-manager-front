import { IconButton } from "@mui/material";
import { FC } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const CopyButton: FC = () => (
  <IconButton>
    <ContentCopyIcon />
  </IconButton>
);
