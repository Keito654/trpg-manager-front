import { GroupCard } from "./groupCard";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { FC } from "react";
import { GroupModel } from "types/veiwModels";

type Props = {
  groupList: Pick<GroupModel, "groupTitle" | "description">[];
};

export const GroupList: FC<Props> = ({ groupList }) => {
  return (
    <>
      <Grid container rowSpacing={5} columnSpacing={3}>
        {groupList.length > 0 &&
          groupList.map((x, i) => (
            <Grid key={i}>
              <GroupCard title={x.groupTitle} description={x.description} />
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
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <AddIcon fontSize="large" sx={{ margin: "auto" }} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
