import { Popover, Box, Typography, Link } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import iguanaImage from "../../../../public/contemplative-reptile.jpg";

type Props = {
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
};

export const ScenarioDetailPop: FC<Props> = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorPosition={{ top: 400, left: 400 }}
      anchorReference="anchorPosition"
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Box
        sx={{
          padding: 3,
          "@media screen and (min-widht: 1200px)": {
            width: "1000px",
          },
          width: "500px",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          シナリオタイトル
        </Typography>
        <Box
          sx={{
            mb: 4,
            position: "relative",
            height: "8rem",
            backgroundColor: "#909090",
          }}
        >
          <Image
            src={iguanaImage}
            alt="aaa"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          説明
        </Typography>
        <Typography sx={{ marginBottom: 3 }}>
          説明説明説明ああああああああああああああああああああ
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          リンク
        </Typography>
        <Link href="http://example.com" target="_blank">
          http://example.com
        </Link>
        <Typography variant="h6" sx={{ marginTop: 3, marginBottom: 1 }}>
          読んだ人
        </Typography>
        <Typography>山田、山田、山田</Typography>
      </Box>
    </Popover>
  );
};
