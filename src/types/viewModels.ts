/* eslint-disable @typescript-eslint/no-explicit-any */
export type GroupModel = {
  id: string;
  groupTitle: string;
  description: string | null;
  shareKey: string;
  creator: string;
};

export type ScenarioModel = {
  id: string;
  scenarioTitle: string;
  image: any | null;
  description: string | null;
  url: string;
  readPerson: string[];
};
