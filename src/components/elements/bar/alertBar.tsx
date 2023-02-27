import CloseIcon from "@mui/icons-material/Close";
import { Snackbar, IconButton, Button } from "@mui/material";
import { FC } from "react";

type Props = {
  open: boolean;
  handleSecondTextClick: () => void;
  handleBarClose: () => void;
  text: string;
  secondText: string;
};

export const AlertBar: FC<Props> = ({
  open,
  handleSecondTextClick,
  handleBarClose,
  text,
  secondText,
}) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={() => {
        handleBarClose();
      }}
      message={text}
      action={
        <>
          <Button
            color="secondary"
            size="small"
            onClick={() => {
              handleSecondTextClick();
            }}
          >
            {secondText}
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              handleBarClose();
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};
