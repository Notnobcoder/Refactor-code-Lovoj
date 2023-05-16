import "./headerStyles.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { logoLink } from "../../ImageLink";
import { DrawerComponent } from "../Drawer";
import { Link } from "react-router-dom";

export const MainHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#e5e5e5" }}>
        <Box
          px={{
            lg: 21,
            md: 12,
          }}
        >
          <Toolbar>
            <DrawerComponent />
            <Link to={"/"}>
              <img src={logoLink} className="mainHeader-logo" />
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#0072B5",
              }}
            >
              Login/ Sign Up
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};
