import { ScenarioCard } from "components/molecules/card/scenarioCard";
import { useClickContextMenu } from "lib/hooks/useClickContextMenu";
import { StaticImageData } from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  image: StaticImageData;
};

export const ScenarioCardContainer: FC<Props> = ({ title, image }) => {
  const { contextMenu, handleRightClick, handleClose } = useClickContextMenu();

  return (
    <ScenarioCard
      title={title}
      image={image}
      contextMenu={contextMenu}
      handleRightClick={handleRightClick}
      handleClose={handleClose}
    />
  );
};
