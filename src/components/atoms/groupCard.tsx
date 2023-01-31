import {
  Card,
  CardActionArea,
  CardContent,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  description: string | undefined;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleRightClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
};

export const GroupCard: FC<Props> = ({
  title,
  description,
  anchorEl,
  open,
  handleRightClick,
  handleClose,
}) => {
  return (
    <div>
      <Card
        sx={{ width: "20rem", height: "12rem", borderColor: "#7d7d7d" }}
        variant="outlined"
      >
        <CardActionArea
          sx={{ height: "100%" }}
          onContextMenu={handleRightClick}
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
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>更新</MenuItem>
        <MenuItem>削除</MenuItem>
      </Menu>
    </div>
  );
};
