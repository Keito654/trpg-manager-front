import { useCopyShareUrl } from "./hooks/useCopyShareUrl";
import { useGroupCreator } from "./hooks/useGroupCreator";
import { Box, Button, TextField } from "@mui/material";
import { AlertBar } from "components/elements/bar/alertBar";
import { CopyButton } from "components/elements/button/copyButton";
import { LabelText } from "components/elements/labelText";
import Link from "next/link";
import { FC } from "react";
import { GroupModel } from "types/viewModels";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    cancel: true;
  }
}

type Props = Pick<GroupModel, "shareKey">;

export const GroupAdd: FC<Props> = ({ shareKey }) => {
  // グループ追加に関わる処理をまとめたカスタムフックを呼び出す。
  const { register, handleSubmit, errors, onSubmit } =
    useGroupCreator(shareKey);

  // 共有URLをコピーする処理をまとめたカスタムフックを呼び出す。
  const { handleCopy, isAlertOpen, setIsAlertOpen } = useCopyShareUrl(shareKey);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 8, mb: 10 }}>
        <Box>
          <LabelText>グループタイトル</LabelText>
          <TextField
            variant="outlined"
            placeholder="50文字まで"
            fullWidth
            required
            maxLength={50}
            {...register("groupTitle")}
            error={"groupTitle" in errors}
            helperText={errors.groupTitle?.message}
          />
        </Box>
        <Box>
          <LabelText>説明</LabelText>
          <TextField
            multiline
            rows={4}
            placeholder="100文字まで"
            maxLength={100}
            fullWidth
            {...register("description")}
            error={"description" in errors}
            helperText={errors.description?.message}
          />
        </Box>
        <Box>
          <LabelText>共有URL</LabelText>
          <TextField
            fullWidth
            InputProps={{
              readOnly: true,
              endAdornment: <CopyButton onClick={handleCopy} />,
            }}
            {...register("urlForJoin")}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          完了
        </Button>
        <Button variant="contained" color="cancel" component={Link} href="/">
          戻る
        </Button>
      </Box>
      <AlertBar
        open={isAlertOpen}
        handleSecondTextClick={handleCopy}
        handleBarClose={() => setIsAlertOpen(false)}
        text="共有URLをコピーしました。"
        secondText="もう一度コピーする"
      />
    </>
  );
};
