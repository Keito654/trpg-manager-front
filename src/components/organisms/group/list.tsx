import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import React, { FC } from "react";
import { GroupCardContainer } from "container/atoms/groupCard";
import Link from "next/link";

export const GroupList: FC = () => {
  return (
    <Grid container rowSpacing={5} columnSpacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
        <Grid key={x}>
          <GroupCardContainer title={"テスト" + x} description={"あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"} />
        </Grid>
      ))}

      {/* カードの最後に表示する、グループ作成画面に遷移するカード */}
      <Grid>
        <Card
          sx={{ width: "20rem", height: "12rem", borderColor: "#7d7d7d" }}
          variant="outlined"
        >
          <CardActionArea
            sx={{ height: "100%" }}
            LinkComponent={Link}
            href="/group/add"
          >
            <CardContent
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <AddIcon fontSize="large" sx={{ margin: "auto" }} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
