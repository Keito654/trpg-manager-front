import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";
import { MenuForAddAndCopy } from "./menuForAddAndCopy";
import { useScenarioAddButtonCliker } from "./hooks/useScenarioAddButtonCliker";

export const ScenarioAddButton: FC = () => {
  const { open, anchorEl, handleClick, handleClose } =
    useScenarioAddButtonCliker();

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
