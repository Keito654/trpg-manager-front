import { TextField } from "@mui/material";
import { SearchButton } from "components/atoms/button/searchButton";
import { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ScenarioModel } from "types/veiwModels";
import noImage from "../../../../public/no-image.jpg";
import { ScenarioCardContainer } from "container/molecules/scenarioCard";
import { ScenarioAddButton } from "components/molecules/scenarioAddButton";

type Props = {
  scenarioList: Pick<ScenarioModel, "scenarioTitle" | "image">[];
};

export const Scenario: FC<Props> = ({ scenarioList }) => {
  return (
    <>
      <TextField
        label="検索"
        fullWidth
        InputProps={{ endAdornment: <SearchButton /> }}
        sx={{ mb: 3 }}
      />
      <Grid container rowSpacing={5} columnSpacing={3}>
        {scenarioList.map((x, i) => (
          <Grid key={i}>
            <ScenarioCardContainer
              title={x.scenarioTitle}
              image={x.image ?? noImage}
            />
          </Grid>
        ))}
      </Grid>
      <ScenarioAddButton />
    </>
  );
};
