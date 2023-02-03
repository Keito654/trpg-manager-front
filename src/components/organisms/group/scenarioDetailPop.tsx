import { Box, Typography, Link, Dialog } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import iguanaImage from "../../../../public/contemplative-reptile.jpg";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const ScenarioDetailPop: FC<Props> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
      <Box className="p-5">
        <Typography variant="h5" className="mb-5">
          シナリオタイトル
        </Typography>
        <Box className="md:flex md:gap-5">
          <Box className="relative h-32 mb-5 md:mb-0 md:h-auto md:w-6/12">
            <Image
              src={iguanaImage}
              alt="aaa"
              fill
              className="object-contain"
            />
          </Box>
          <Box>
            <Typography variant="h6" className="mb-3">
              説明
            </Typography>
            <Typography className="mb-8">
              説明説明説明ああああああああああああああああああああ
            </Typography>
            <Typography variant="h6" className="mb-3">
              リンク
            </Typography>
            <Link href="http://example.com" target="_blank">
              http://example.com
            </Link>
            <Typography variant="h6" className="mt-8 mb-3">
              読んだ人
            </Typography>
            <Typography>山田、山田、山田</Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
