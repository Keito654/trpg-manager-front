import { GroupCard } from "components/molecules/card/groupCard";
import { useClickContextMenu } from "lib/hooks/useClickContextMenu";
import { FC } from "react";

type Props = {
  title: string;
  description: string | undefined;
};

export const GroupCardContainer: FC<Props> = ({ title, description }) => {
  const { contextMenu, handleRightClick, handleClose } = useClickContextMenu();

  return (
    <GroupCard
      title={title}
      description={description}
      contextMenu={contextMenu}
      handleRightClick={handleRightClick}
      handleClose={handleClose}
    />
  );
};
