import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { convertPathToName } from "lib/convertPathToName";

type Props = {
  children: React.ReactNode;
  path: string;
};

export const Layout: FC<Props> = ({ children, path }) => {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold" }}
              >
                {convertPathToName(path)}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <Container fixed component="main" sx={{ marginTop: 3 }}>
        {children}
      </Container>
    </>
  );
};
