import { Menu, MenuItem } from "@mui/material";
import { FC } from "react";

type Props = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
};

export const MenuForHeader: FC<Props> = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>ログアウト</MenuItem>
    </Menu>
  );
};
