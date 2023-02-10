import { Scenario } from "features/scenarioList/scenario";
import { ScenarioModel } from "types/veiwModels";

export default function ScenarioPage() {
  const argObj = Array.from(new Array(10)).map((x, i) => {
    const temp: Pick<ScenarioModel, "scenarioTitle" | "image"> = {
      scenarioTitle: `シナリオ${i}`,
    };

    return temp;
  });

  return <Scenario scenarioList={argObj} />;
}
