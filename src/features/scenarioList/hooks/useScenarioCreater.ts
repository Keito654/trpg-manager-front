import { useState } from "react";

export const useScenarioCreater = () => {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  const handleCreateButtonClick = () => {
    setIsCreatePopupOpen(true);
  };

  const handleCreateButtonClose = () => {
    setIsCreatePopupOpen(false);
  };

  return {
    isCreatePopupOpen,
    handleCreateButtonClick,
    handleCreateButtonClose,
  };
};
