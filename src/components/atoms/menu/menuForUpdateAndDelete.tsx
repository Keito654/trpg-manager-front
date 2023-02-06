import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC } from "react";

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
  return (
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
      <MenuItem>
        <ListItemIcon>
          <DeleteIcon fontSize="small" className="text-red-600" />
        </ListItemIcon>
        <ListItemText className="text-red-600">削除</ListItemText>
      </MenuItem>
    </Menu>
  );
};
