import { Popover, Box, TextField } from "@mui/material";
import { FC } from "react";
import { LabelText } from "../../atoms/labelText";
import Image from "next/image";
import iguanaImage from "../../../../public/contemplative-reptile.jpg";

type Props = {
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
};

export const ScenarioAddPop: FC<Props> = ({ anchorEl, handleClose }) => {
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
        <LabelText>シナリオ</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          sx={{ mb: 4 }}
        />
        <LabelText>画像</LabelText>
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
        <LabelText>URL</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          sx={{ mb: 4 }}
        />
        <LabelText>説明</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          sx={{ mb: 4 }}
        />
        <LabelText>読んだ人</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          sx={{ mb: 4 }}
        />
      </Box>
    </Popover>
  );
};
