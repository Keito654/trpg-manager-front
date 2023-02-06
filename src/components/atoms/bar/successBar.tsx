import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

type Props = {
  open: boolean;
  handleBarClose: () => void;
  text: string;
};

export const SuccessBar: FC<Props> = ({ open, handleBarClose, text }) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    handleBarClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={text}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};
