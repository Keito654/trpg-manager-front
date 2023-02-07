import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { FC } from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const DeleteDialog: FC<Props> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="削除してよろしいですか？"
      aria-describedby="削除すると元には戻せません。"
    >
      <DialogTitle id="alert-dialog-title">
        {"削除してよろしいですか？"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          削除すると元には戻せません。
        </DialogContentText>
      </DialogContent>
      <DialogActions className="flex justify-between">
        <Button className="text-red-600">削除する</Button>
        <Button autoFocus className="text-gray-700" onClick={handleClose}>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};
