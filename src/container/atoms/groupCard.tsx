import { GroupCard } from "components/atoms/groupCard";
import { FC, useState } from "react";

type Props = {
  title: string;
  description: string | undefined;
};

export const GroupCardContainer: FC<Props> = ({ title, description }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <GroupCard
      title={title}
      description={description}
      anchorEl={anchorEl}
      open={open}
      handleRightClick={handleRightClick}
      handleClose={handleClose}
    />
  );
};
