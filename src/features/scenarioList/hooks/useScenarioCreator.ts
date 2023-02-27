import { useState } from "react";

export const useScenarioCreator = () => {
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
