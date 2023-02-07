import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC, useState } from "react";
import { MenuForAddAndCopy } from "components/elements/menu/menuForAddAndCopy";

export const ScenarioAddButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        color="secondary"
        className="sticky bottom-12 float-right"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
      <MenuForAddAndCopy
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </>
  );
};
