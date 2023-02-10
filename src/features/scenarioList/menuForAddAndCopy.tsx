import { useScenarioCreater } from "./hooks/useScenarioCreater";
import { ScenarioAddPop } from "./scenarioAddPop";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
} from "@mui/material";
import { FC } from "react";

type Props = {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
};

export const MenuForAddAndCopy: FC<Props> = ({ open, anchorEl, onClose }) => {
  const {
    isCreatePopupOpen,
    handleCreateButtonClick,
    handleCreateButtonClose,
  } = useScenarioCreater();

  return (
    <>
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
        <MenuItem onClick={handleCreateButtonClick}>
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
      <ScenarioAddPop
        open={isCreatePopupOpen}
        handleClose={handleCreateButtonClose}
      />
    </>
  );
};
