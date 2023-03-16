import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./responsive-drawer.styles.scss";
import { Typography } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  open?: boolean;
}

export default function ResponsiveDrawer({ children }: Props) {
  const [open, setOpen] = useState(false);

  const drawerWidth = 50;

  const Main = ({ children, open }: Props) => {
    return (
      <Box
        style={open ? { marginLeft: 0 } : { marginLeft: "-50px" }}
        className="main-container"
      >
        {children}
      </Box>
    );
  };

  const AppBar = ({ children, open }: Props) => {
    return (
      <MuiAppBar
        position="fixed"
        style={{
          width: open ? `calc(100% - ${drawerWidth})` : "100%",
          marginLeft: open ? `${drawerWidth}` : 0,
        }}
        className="app-bar"
      >
        {children}
      </MuiAppBar>
    );
  };

  const DrawerHeader = ({ children }: Props) => {
    return <div className="drawer-header">{children}</div>;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar open={open}>
        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }), color: "red" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <div className="drawer-header-container">
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
      </Drawer>
      <Main open={open}>
        <div className="content-container">{children}</div>
      </Main>
    </Box>
  );
}
