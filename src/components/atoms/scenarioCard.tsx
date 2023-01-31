import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import iguana from "../../../public/contemplative-reptile.jpg";

type Props = {
  title: string;
};

export const ScenarioCard: FC<Props> = ({ title }) => {
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          width: "21rem",
          borderColor: "#7d7d7d",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: "8rem", position: "relative" }}
            title="green iguana"
          >
            <Image
              src={iguana}
              alt="iguana"
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
    </div>
  );
};
