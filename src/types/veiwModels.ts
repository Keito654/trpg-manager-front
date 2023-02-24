/* eslint-disable @typescript-eslint/no-explicit-any */
export type GroupModel = {
  groupTitle: string;
  description?: string;
  urlForJoin: string;
  creator: string;
};

export type ScenarioModel = {
  scenarioTitle: string;
  image?: any;
  description?: string;
  url: string;
  readPerson?: string;
};
