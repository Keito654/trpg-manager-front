import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { MenuForUpdateAndDelete } from "components/elements/menu/menuForUpdateAndDelete";
import { useRightClicker } from "libs/hooks/useRightClicker";

type Props = {
  title: string;
  image?: string;
};

export const ScenarioCard: FC<Props> = ({ title, image = "/no-image.jpg" }) => {
  const { contextMenu, handleRightClick, handleClose } = useRightClicker();

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: "21rem",
          borderColor: "#7d7d7d",
        }}
      >
        <CardActionArea onContextMenu={handleRightClick}>
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
      />
    </>
  );
};
