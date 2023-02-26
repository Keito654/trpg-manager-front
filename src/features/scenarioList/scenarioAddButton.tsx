import { useScenarioAddButtonCliker } from "./hooks/useScenarioAddButtonCliker";
import { MenuForAddAndCopy } from "./menuForAddAndCopy";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { FC } from "react";

type Props = {
  groupId: string;
};

export const ScenarioAddButton: FC<Props> = ({ groupId }) => {
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
        groupId={groupId}
      />
    </>
  );
};
