export const convertPathToName = (path: string): string => {
  type Obj = {
    [key: string]: string;
  };

  const pathToNameObj: Obj = {
    "/": "グループ一覧",
    "/login": "ログイン",
    "/group/add": "グループを作成",
    "/group/update": "グループの情報を更新",
    "/group/join": "グループに参加",
    "/group/scenario": "シナリオ一覧",
  };

  return pathToNameObj[path] ?? "NoTitle";
};
