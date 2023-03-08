import { useClipboard } from "@mantine/hooks";
import { useShareUrlConverter } from "libs/hooks/useShareUrlConverter";
import { useState } from "react";

export const useCopyShareUrl = (shareKey: string) => {
  const { convertShareKeyToUrl } = useShareUrlConverter();
  const clipboard = useClipboard({ timeout: 500 });

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleCopy = () => {
    clipboard.copy(convertShareKeyToUrl(shareKey));
    setIsAlertOpen(true);
  };

  return { handleCopy, isAlertOpen, setIsAlertOpen };
};
