import { useClipboard } from "@mantine/hooks";
import { useShareUrlConverter } from "libs/hooks/useShareUrlConverter";
import { useState } from "react";

export const useCopyShareUrl = (groupId: string) => {
  const { convertShareKeyToUrl } = useShareUrlConverter();
  const clipboard = useClipboard({ timeout: 500 });

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAddMemberButtonClick = async () => {
    const res = await fetch(`/api/getShareUrl?groupId=${groupId}`, {
      method: "GET",
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (json.ok) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      clipboard.copy(convertShareKeyToUrl(json.shareKey as string));
      setIsAlertOpen(true);
    } else {
      alert("共有URLの取得に失敗しました");
    }
  };

  return { isAlertOpen, setIsAlertOpen, handleAddMemberButtonClick };
};
