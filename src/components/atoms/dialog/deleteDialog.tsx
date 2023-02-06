import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { FC } from "react";

export const DeleteDialog: FC = () => {
  return (
    <Dialog
      open={true}
      onClose={() => {}}
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
        <Button autoFocus className="text-gray-700">
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};
