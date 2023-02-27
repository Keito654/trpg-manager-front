import { useScenarioCreator } from "./hooks/useScenarioCreator";
import { ScenarioAddPop } from "./scenarioAddPop";
import { useClipboard } from "@mantine/hooks";
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

export const MenuForAddAndCopy: FC<Props> = ({
  open,
  anchorEl,
  onClose,
  groupId,
}) => {
  const {
    isCreatePopupOpen,
    handleCreateButtonClick,
    handleCreateButtonClose,
  } = useScenarioCreator();

  const clipboard = useClipboard({ timeout: 500 });

  const handleAddMemberButtonClick = async () => {
    const res = await fetch(`/api/getShareUrl?groupId=${groupId}`, {
      method: "GET",
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (json.ok) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      clipboard.copy(json.shareKey);
    } else {
      alert("共有URLの取得に失敗しました");
    }
  };

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
      {"/* TODO アラートを作成する */"}
      <AlertBar
        open={false}
        handleBarClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        text="共有URLをコピーしました。"
        secondText="もう一度コピーする"
      />
    </>
  );
};
