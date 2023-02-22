import { useHeaderEvent } from "./hooks/useHeaderEvent";
import { MenuForHeader } from "./menuForHeader";
import { AccountCircle, Home } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const { anchorEl, handleMenu, handleClose } = useHeaderEvent();

  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold" }}
              >
                {"TRPGシナリオマネージャー"}
              </Typography>
              <div>
                <IconButton
                  size="large"
                  aria-label="home page button"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  LinkComponent={Link}
                  href="/"
                >
                  <Home />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleMenu}
                >
                  <AccountCircle />
                </IconButton>
                <MenuForHeader anchorEl={anchorEl} handleClose={handleClose} />
              </div>
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
