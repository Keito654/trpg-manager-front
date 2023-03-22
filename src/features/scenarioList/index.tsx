import { PlusButton } from "./plusButton";
import { ScenarioCard } from "./scenarioCard";
import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SearchButton } from "components/elements/button/searchButton";
import { FC } from "react";
import { ScenarioModel } from "types/viewModels";

type Props = {
  scenarioList: Pick<ScenarioModel, "id" | "scenarioTitle" | "image">[];
  groupId: string;
};

//TODO: 検索処理を追加する。

export const ScenarioList: FC<Props> = ({ scenarioList, groupId }) => {
  return (
    <>
      <TextField
        label="検索"
        fullWidth
        InputProps={{ endAdornment: <SearchButton /> }}
        sx={{ mb: 3 }}
      />
      {scenarioList.length > 0 ? (
        <Grid container rowSpacing={5} columnSpacing={3}>
          {scenarioList.map((x, i) => (
            <Grid key={i}>
              <ScenarioCard title={x.scenarioTitle} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>シナリオがありません。</Typography>
      )}
      <PlusButton groupId={groupId} />
    </>
  );
};
