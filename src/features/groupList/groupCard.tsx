import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { MenuForUpdateAndDelete } from "components/elements/menu/menuForUpdateAndDelete";
import { useRightClicker } from "libs/hooks/useRightClicker";
import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  description: string | undefined;
};

export const GroupCard: FC<Props> = ({ title, description }) => {
  const { contextMenu, handleRightClick, handleClose } = useRightClicker();

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
          href="/group/scenario"
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
        handleClose={handleClose}
      />
    </>
  );
};
