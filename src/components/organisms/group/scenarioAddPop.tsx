import { Box, TextField, Dialog } from "@mui/material";
import { FC } from "react";
import { LabelText } from "../../atoms/labelText";
import Image from "next/image";
import iguanaImage from "../../../../public/contemplative-reptile.jpg";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const ScenarioAddPop: FC<Props> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
      <Box className="p-5">
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
    </Dialog>
  );
};
