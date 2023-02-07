import { GroupUpdate } from "features/groupUpdate/update";

export default function GroupUpdatePage() {
  return (
    <GroupUpdate
      groupTitle={"グループタイトル"}
      description={"説明"}
      urlForJoin={"http://example.com"}
    />
  );
}
