import { DetailPop } from "./detailPop";
import { useScenarioDetailOpener } from "./hooks/useScenariDetailOpener";
import { useScenarioUpdateOpener } from "./hooks/useScenarioUpdateOpener";
import { UpdatePop } from "./updatePop";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { MenuForUpdateAndDelete } from "components/elements/menu/menuForUpdateAndDelete";
import { useRightClicker } from "libs/hooks/useRightClicker";
import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  image?: string;
};

export const ScenarioCard: FC<Props> = ({ title, image = "/no-image.jpg" }) => {
  const { contextMenu, handleRightClick, handleClose } = useRightClicker();

  const { IsDetailOpen, handleOpenDetail, handleCloseDetail } =
    useScenarioDetailOpener();

  const { IsUpdateOpen, handleOpenUpdate, handleCloseUpdate } =
    useScenarioUpdateOpener();

  //TODO: シナリオ更新処理を追加する。
  //TODO: シナリオ削除処理を追加する。
  //TODO: シナリオ詳細画面を追加する。

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: "21rem",
          borderColor: "#7d7d7d",
        }}
      >
        <CardActionArea
          onContextMenu={handleRightClick}
          onClick={handleOpenDetail}
        >
          <CardMedia
            sx={{ height: "8rem", position: "relative" }}
            title="scenario image"
          >
            <Image
              src={image}
              alt="scenario image"
              fill
              style={{ objectFit: "cover" }}
            />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                WebkitLineClamp: 3,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                height: "100%",
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <MenuForUpdateAndDelete
        contextMenu={contextMenu}
        handleClose={handleClose}
        handleClickUpdate={handleOpenUpdate}
      />
      <UpdatePop
        open={IsUpdateOpen}
        handleClose={handleCloseUpdate}
        title={""}
        url={""}
        description={""}
        readPerson={""}
      />
      <DetailPop
        open={IsDetailOpen}
        handleClose={handleCloseDetail}
        scenarioTitle={title}
        description={""}
        url={""}
        readPerson={""}
      />
    </>
  );
};
