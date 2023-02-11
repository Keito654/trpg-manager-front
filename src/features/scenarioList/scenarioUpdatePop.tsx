import { Box, TextField, Dialog, Button } from "@mui/material";
import { LabelText } from "components/elements/labelText";
import Image from "next/image";
import { FC } from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
  title: string;
  url: string;
  description: string;
  readPerson: string;
};

export const ScenarioUpdatePop: FC<Props> = ({
  open,
  handleClose,
  title,
  url,
  description,
  readPerson,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
      <Box className="p-5">
        <LabelText>シナリオタイトル</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          className="mb-8"
          defaultValue={title}
        />
        <LabelText>画像</LabelText>
        <Box className="mb-8 md:flex">
          <Box className="relative mb-3 h-32 bg-gray-400 md:mb-0 md:w-9/12">
            <Image
              src="/no-image.jpg"
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
        <TextField
          variant="outlined"
          fullWidth
          className="mb-8"
          defaultValue={url}
        />
        <LabelText>説明</LabelText>
        <TextField
          variant="outlined"
          multiline
          rows={4}
          placeholder="100文字まで"
          fullWidth
          className="mb-8"
          defaultValue={description}
        />
        <LabelText>読んだ人</LabelText>
        <TextField
          variant="outlined"
          placeholder="50文字まで"
          fullWidth
          className="mb-8"
          defaultValue={readPerson}
        />
        <Box className="mt-8 flex justify-evenly">
          <Button variant="contained" color="secondary" onClick={handleClose}>
            完了
          </Button>
          <Button variant="contained" color="cancel" onClick={handleClose}>
            キャンセル
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
