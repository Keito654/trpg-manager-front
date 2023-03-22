import { ScenarioAddPop } from "./addPop";
import { useCopyShareUrl } from "./hooks/useCopyShareUrl";
import { useScenarioCreator } from "./hooks/useScenarioCreator";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
} from "@mui/material";
import { AlertBar } from "components/elements/bar/alertBar";
import { FC } from "react";

type Props = {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  groupId: string;
};

export const ButtonMenu: FC<Props> = ({ open, anchorEl, onClose, groupId }) => {
  const {
    isCreatePopupOpen,
    handleCreateButtonClick,
    handleCreateButtonClose,
  } = useScenarioCreator();

  const { isAlertOpen, setIsAlertOpen, handleAddMemberButtonClick } =
    useCopyShareUrl(groupId);

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
        <MenuItem onClick={handleAddMemberButtonClick}>
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
      <AlertBar
        open={isAlertOpen}
        handleSecondTextClick={handleAddMemberButtonClick}
        handleBarClose={() => setIsAlertOpen(false)}
        text="共有URLをコピーしました。"
        secondText="もう一度コピーする"
      />
    </>
  );
};
