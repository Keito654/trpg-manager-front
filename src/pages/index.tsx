import { GroupList } from "features/groupList/list";
import { GroupModel } from "types/veiwModels";

export default function Home() {
  const argObj = Array.from(new Array(10)).map((x, i) => {
    const temp: Pick<GroupModel, "groupTitle" | "description"> = {
      groupTitle: "グループ" + i,
      description: "これはテストグループです。",
    };
    return temp;
  });

  return <GroupList groupList={argObj} />;
}
