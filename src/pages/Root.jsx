import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Appbar from "MUI_components/AppBar";
import Drawerr from "MUI_components/Drawer";
import  { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import getDesignTokens from "style/MyTheme";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );


 



  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };


  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />

        <Drawerr
          drawerWidth={drawerWidth}
          setmyMOde={setmyMOde}
          noneORblock={noneORblock}
          drawerType={drawerType}
          hideDrawer={hideDrawer}
        />

        <Box
          // className="border"
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;