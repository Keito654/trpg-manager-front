import React, { useState } from "react";

export const useRightClicker = () => {
  const [contextMenu, setContextMenu] =
    useState<{
      mouseX: number;
      mouseY: number;
    } | null>(null);

  const handleRightClick: React.MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return { contextMenu, handleRightClick, handleClose };
};
