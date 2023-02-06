import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { FC } from "react";

type Props = {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
};

export const MenuForAddAndCopy: FC<Props> = ({ open, anchorEl, onClose }) => {
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <MenuItem>
        <ListItemIcon>
          <AddIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>シナリオを追加</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAddIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>グループにメンバーを追加</ListItemText>
      </MenuItem>
    </Menu>
  );
};
