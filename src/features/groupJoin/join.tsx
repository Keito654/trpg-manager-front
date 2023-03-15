import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { GroupModel } from "types/viewModels";

export const GroupJoin: FC<
  Pick<GroupModel, "id" | "groupTitle" | "description">
> = ({ id, groupTitle, description }) => {
  // TODO : グループの作成者の名前が取得できないため、表示させていない。修正する。

  const router = useRouter();

  const handleJoinGroup = async (groupId: string) => {
    const response = await fetch("/api/joinGroup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ groupId }),
    });

    if (response.ok) {
      alert("グループに参加しました！");
      // 参加後に遷移したいページへリダイレクトするなどの処理を追加
      void router.push("/");
    } else {
      alert("グループへの参加に失敗しました。もう一度お試しください。");
    }
  };

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
          {groupTitle}
        </Typography>
        <Typography sx={{ mb: 2 }}>{description}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 10 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleJoinGroup(id)}
        >
          参加する
        </Button>
        <Button variant="contained" color="cancel" component={Link} href="/">
          キャンセル
        </Button>
      </Box>
    </>
  );
};
