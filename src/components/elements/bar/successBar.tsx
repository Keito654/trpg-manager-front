import CloseIcon from "@mui/icons-material/Close";
import { Snackbar, IconButton } from "@mui/material";
import { FC } from "react";

type Props = {
  open: boolean;
  handleBarClose: () => void;
  text: string;
};

export const SuccessBar: FC<Props> = ({ open, handleBarClose, text }) => {
  const handleClose = () => {
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
