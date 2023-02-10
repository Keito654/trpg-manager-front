import { useScenarioAddButtonCliker } from "./hooks/useScenarioAddButtonCliker";
import { MenuForAddAndCopy } from "./menuForAddAndCopy";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { FC } from "react";

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
