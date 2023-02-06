import { IconButton, TextField } from "@mui/material";
import { ScenarioCard } from "components/atoms/card/scenarioCard";
import { SearchButton } from "components/atoms/button/searchButton";
import { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import { ScenarioModel } from "types/veiwModels";
import noImage from "../../../../public/no-image.jpg";


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
            <ScenarioCard title={x.scenarioTitle} image={x.image ?? noImage} />
          </Grid>
        ))}
      </Grid>
      <IconButton
        sx={{
          backgroundColor: "#2196f3",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#4dabf5" },
          width: "2.3em",
          height: "2.3em",
          position: "sticky",
          bottom: "50px",
          float: "right",
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </>
  );
};
