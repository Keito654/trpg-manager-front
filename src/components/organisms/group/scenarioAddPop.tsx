import { Box, TextField, Dialog, Button } from "@mui/material";
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
        <LabelText>シナリオタイトル</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          className="mb-8"
        />
        <LabelText>画像</LabelText>
        <Box className="mb-8 md:flex">
          <Box className="relative mb-3 h-32 bg-gray-400 md:mb-0 md:w-9/12">
            <Image
              src={iguanaImage}
              alt="aaa"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box className="md:flex md:w-3/12 md:items-center md:justify-center md:text-center">
            <Button variant="contained" component="label">
              画像をアップロード
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Box>
        </Box>
        <LabelText>URL</LabelText>
        <TextField variant="outlined" fullWidth className="mb-8" />
        <LabelText>説明</LabelText>
        <TextField
          variant="outlined"
          placeholder="100文字まで"
          fullWidth
          className="mb-8"
        />
        <LabelText>読んだ人</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          className="mb-8"
        />
        <Box className="mt-8 flex justify-evenly">
          <Button variant="contained" color="secondary">
            完了
          </Button>
          <Button variant="contained" color="cancel">
            キャンセル
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
