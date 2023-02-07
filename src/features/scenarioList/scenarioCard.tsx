import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { MenuForUpdateAndDelete } from "components/elements/menu/menuForUpdateAndDelete";
import { useRightClicker } from "libs/hooks/useRightClicker";
import noImage from "@public/no-image.jpg";

type Props = {
  title: string;
  image: StaticImageData;
};

export const ScenarioCard: FC<Props> = ({ title, image }) => {
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
              src={image ?? noImage}
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
