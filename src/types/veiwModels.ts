/* eslint-disable @typescript-eslint/no-explicit-any */
export type GroupModel = {
  groupTitle: string;
  description: string | null;
  urlForJoin: string;
  creator: string;
};

export type ScenarioModel = {
  scenarioTitle: string;
  image: any;
  description: string | null;
  url: string;
  readPerson: string[];
};
