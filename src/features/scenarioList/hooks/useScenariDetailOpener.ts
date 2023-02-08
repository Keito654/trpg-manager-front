import { useState } from "react";

export const useScenarioDetailOpener = () => {
  // open state
  const [IsDetailOpen, setIsDetailOpen] = useState(false);

  // click open handler
  const handleOpenDetail = () => {
    setIsDetailOpen(true);
  };

  // click close handler
  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return { IsDetailOpen, handleOpenDetail, handleCloseDetail };
};
