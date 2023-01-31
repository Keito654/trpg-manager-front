import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

export const GroupJoin: FC = () => {
  return (
    <>
      <Typography>以下のグループに招待されています。参加しますか？</Typography>
      <Box
        sx={{
          border: "1px solid #000000",
          padding: 3,
          mt: 2,
          backgroundColor: "#F8F8F8",
        }}
      >
        <Typography sx={{ mb: 2 }} variant="h6">
          グループネーム
        </Typography>
        <Typography sx={{ mb: 2 }}>説明</Typography>
        <Typography>作成者：あああああ</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 10 }}>
        <Button variant="contained" color="secondary">
          参加する
        </Button>
        <Button variant="contained" color="cancel" component={Link} href="/">
          キャンセル
        </Button>
      </Box>
    </>
  );
};
