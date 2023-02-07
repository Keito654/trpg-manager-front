import { Snackbar, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

type Props = {
  open: boolean;
  handleBarClose: () => void;
  text: string;
  secondText: string;
};

export const AlertBar: FC<Props> = ({ open, handleBarClose, text, secondText }) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    handleBarClose();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={handleClose}
      message={text}
      action={
        <>
          <Button color="secondary" size="small" onClick={handleClose}>
            {secondText}
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};
