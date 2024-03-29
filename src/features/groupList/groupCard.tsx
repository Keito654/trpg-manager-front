import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { MenuForUpdateAndDelete } from "components/elements/menu/menuForUpdateAndDelete";
import { useRightClicker } from "libs/hooks/useRightClicker";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  id: string;
  title: string;
  description: string | null;
};

export const GroupCard: FC<Props> = ({ id, title, description }) => {
  const { contextMenu, handleRightClick, handleClose } = useRightClicker();
  const router = useRouter();

  //TODO: グループ削除処理を追加する。
  return (
    <>
      <Card
        sx={{ width: "20rem", height: "12rem", borderColor: "#7d7d7d" }}
        variant="outlined"
      >
        <CardActionArea
          sx={{ height: "100%" }}
          onContextMenu={handleRightClick}
          LinkComponent={Link}
          href={`/group/${id}`}
        >
          <CardContent
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h5" component="div" noWrap={true}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                WebkitLineClamp: 6,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <MenuForUpdateAndDelete
        contextMenu={contextMenu}
        handleClickUpdate={() => {
          void router.push("/group/update");
        }}
        handleClose={handleClose}
      />
    </>
  );
};
