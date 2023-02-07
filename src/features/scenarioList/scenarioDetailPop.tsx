import { Box, Typography, Link, Dialog, Button } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { ScenarioModel } from "types/veiwModels";
import noImage from "@public/no-image.jpg";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const ScenarioDetailPop: FC<Props & ScenarioModel> = ({
  open,
  handleClose,
  scenarioTitle,
  image,
  description,
  url,
  readPerson,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
      <Box className="p-5">
        <Typography variant="h5" className="mb-5">
          {scenarioTitle}
        </Typography>
        <Box className="md:flex md:gap-5">
          <Box className="relative mb-5 h-32 md:mb-0 md:h-auto md:w-6/12">
            <Image src={noImage} alt="aaa" fill className="object-contain" />
          </Box>
          <Box>
            <Typography variant="h6" className="mb-3">
              説明
            </Typography>
            <Typography className="mb-8">{description}</Typography>
            <Typography variant="h6" className="mb-3">
              リンク
            </Typography>
            <Link href={url} target="_blank">
              {url}
            </Link>
            <Typography variant="h6" className="mt-8 mb-3">
              読んだ人
            </Typography>
            <Typography>{readPerson}</Typography>
          </Box>
        </Box>
        <Box className="mt-16 flex justify-evenly">
          <Button variant="contained" color="secondary">
            完了
          </Button>
          <Button variant="contained" color="cancel">
            キャンセル
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};