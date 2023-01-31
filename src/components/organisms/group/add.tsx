import { Box, Button, TextField } from "@mui/material";
import { CopyButton } from "components/atoms/copyButton";
import { LabelText } from "components/atoms/labelText";
import Link from "next/link";
import { FC } from "react";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    cancel: true;
  }
}

export const GroupAdd: FC = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 8, mb: 10 }}>
        <Box>
          <LabelText>グループタイトル</LabelText>
          <TextField variant="outlined" placeholder="50文字まで" fullWidth />
        </Box>
        <Box>
          <LabelText>説明</LabelText>
          <TextField multiline rows={4} placeholder="100文字まで" fullWidth />
        </Box>
        <Box>
          <LabelText>共有URL</LabelText>
          <TextField
            defaultValue={"aaaaaaaaaaa"}
            fullWidth
            InputProps={{ readOnly: true, endAdornment: <CopyButton /> }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button variant="contained" color="secondary">
          完了
        </Button>
        <Button variant="contained" color="cancel" component={Link} href="/">
          戻る
        </Button>
      </Box>
    </>
  );
};
