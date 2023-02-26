/* eslint-disable @typescript-eslint/no-explicit-any */
export type GroupModel = {
  id: string;
  groupTitle: string;
  description: string | null;
  urlForJoin: string;
  creator: string;
};

export type ScenarioModel = {
  id: number;
  scenarioTitle: string;
  image: any | null;
  description: string | null;
  url: string;
  readPerson: string[];
};
