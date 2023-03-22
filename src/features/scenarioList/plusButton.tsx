import { ButtonMenu } from "./buttonMenu";
import { useScenarioAddPopOpener } from "./hooks/useScenarioAddPopOpener";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { FC } from "react";

type Props = {
  groupId: string;
};

export const PlusButton: FC<Props> = ({ groupId }) => {
  const { open, anchorEl, handleClick, handleClose } =
    useScenarioAddPopOpener();

  return (
    <>
      <Fab
        color="secondary"
        className="sticky bottom-12 float-right"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
      <ButtonMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        groupId={groupId}
      />
    </>
  );
};
