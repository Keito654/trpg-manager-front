import { DeleteDialog } from "../dialog/deleteDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import React, { FC, useState } from "react";

type ContextMenu = {
  mouseX: number;
  mouseY: number;
} | null;

type Props = {
  contextMenu: ContextMenu;
  handleClose: () => void;
};

export const MenuForUpdateAndDelete: FC<Props> = ({
  contextMenu,
  handleClose,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  const handleDeleteClose = () => {
    setIsDeleting(false);
  };

  return (
    <>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        onContextMenu={(event: React.MouseEvent) => {
          event.preventDefault();
          handleClose();
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>編集</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDeleteClick}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" className="text-red-600" />
          </ListItemIcon>
          <ListItemText className="text-red-600">削除</ListItemText>
        </MenuItem>
      </Menu>
      <DeleteDialog open={isDeleting} handleClose={handleDeleteClose} />
    </>
  );
};
