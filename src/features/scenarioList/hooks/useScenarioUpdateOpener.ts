import { useState } from "react";

export const useScenarioUpdateOpener = () => {
  // open state
  const [IsUpdateOpen, setIsUpdateOpen] = useState(false);

  // click open handler
  const handleOpenUpdate = () => {
    setIsUpdateOpen(true);
  };

  // click close handler
  const handleCloseUpdate = () => {
    setIsUpdateOpen(false);
  };

  return { IsUpdateOpen, handleOpenUpdate, handleCloseUpdate };
};
