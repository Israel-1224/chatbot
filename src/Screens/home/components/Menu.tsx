import {
  AppBar,
  Button,
  Dialog,
  Divider,
  Drawer,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GroupIcon from "@mui/icons-material/Group";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LockResetIcon from "@mui/icons-material/LockReset";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { Header } from "./Header";

export const IconsMenu = (icon: string) => {
  switch (icon) {
    case "HomeOutlinedIcon":
      return <HomeOutlinedIcon />;
    case "FolderOutlinedIcon":
      return <FolderOutlinedIcon />;
    case "CampaignIcon":
      return <CampaignIcon />;
    case "KeyboardDoubleArrowRightIcon":
      return <KeyboardDoubleArrowRightIcon />;
    case "SettingsOutlinedIcon":
      return <SettingsOutlinedIcon />;
    case "GroupIcon":
      return <GroupIcon />;
    case "LockResetIcon":
      return <LockResetIcon />;
    case "LogoutOutlinedIcon":
      return <LogoutOutlinedIcon />;
    case "InfoOutlinedIcon":
      return <InfoOutlinedIcon />;

    default:
      return <KeyboardDoubleArrowRightIcon />;
  }
};

export const MenuBanorte = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [openPasswordChange, setOpenPasswordChange] = useState(false);

  const handleClosePasswordChange = () => {
    setOpenPasswordChange(false);
  };

  // function stringAvatar(name: string) {
  //   return `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`;
  // }

  // function stringToColor(string: string) {
  //   let hash = 0;
  //   let i;
  //   for (i = 0; i < string?.length; i += 1) {
  //     hash = string.charCodeAt(i) + ((hash << 11) - hash);
  //   }

  //   let color = "#";
  //   for (i = 0; i < 3; i += 1) {
  //     const value = (hash >> (i * 8)) & 0xff;
  //     color += `00${value.toString(16)}`.slice(-2);
  //   }

  //   return color;
  // }


  return (

    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >

<AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{ height: ["7vh", "7vh", "7vh", "7vh", "7vh"], width: "100vw" }}
        >
          <Grid
            container
            sx={{
              height: ["7vh", "7vh", "7vh", "7vh", "7vh"],
              width: "100vw",
              display: "flex",
            }}
          >
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {/* <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
                <Tooltip title="Menu Lateral">
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Grid> */}

              <Grid
                item
                xl={9}
                lg={9}
                md={9}
                sm={9}
                xs={9}
                //sx={{ backgroundColor: "blue" }}
              >
                <Header
                  //sx={{ fontSize: [30, 30, 30, 30, 40]}}
                  // details={{
                  //   name1: "INICIO",
                  //   path1: "../home",
                  //   name2: "Inicio",
                  //   path2: "",
                  //   name3: "",
                  // }}
                />
              </Grid>

          

            </Grid>
          </Grid>

          {/* <Grid sx={{ height: "8vh", marginLeft: "4vw" }}> */}
        </Toolbar>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Grid
            container
            sx={{
              width: ["100vw", "100vw", "60vw", "40vw", "30vw"],
              height: "100vh",
            }}
          >
            <Grid
              item
              container
              sx={{
                width: "100%",
                height: "40vh",
                alignContent: "flex-start",
                display: "flex",
              }}
            >
              <Grid
                sx={{
                  height: "7vh",
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  mt: "1vh",
                }}
              >
              
              </Grid>

              <Grid
                sx={{
                  height: "7vh",
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  mt: "1vh",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", fontFamily: "MontserratSemiBold" }}
                >
                  Chat bot de ayuda Banorte
                </Typography>
              </Grid>

              <Grid
                sx={{
                  width: "100%",
                  height: "11vh",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{
                    backgroundColor: "white"
                  }}
                  sx={{
                    width: "11vh",
                    height: "11vh",
                    fontSize: "1.5vw",
                    fontFamily: "MontserratMedium",
                    boxShadow: 4,
                  }}
                >
                  Hola
                </Avatar>
              </Grid>

              <Grid
                sx={{
                 
                  width: "100%",
                  height: "7vh",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                
                <Typography >
                Tipo de usuario
                </Typography>
              </Grid>

              <Grid
                sx={{
              
                  width: "100%",
                  height: "7vh",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontFamily: "MontserratMedium", display: "flex" }}
                >
                  Departamento
                </Typography>
                <Tooltip title={"Departamento"}>
                  <Typography
                    fontFamily={"'Montserrat', sans-serif"}
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "center",
                      fontSize: [9, 9, 10, 10, 10], // Tamaños de fuente para diferentes breakpoints
                      // color: "#AF8C55",
                    }}
                  >
                    Departamento
                  </Typography>
                </Tooltip>
              </Grid>

           
            </Grid>
            
            <Divider />

            <Grid
              item
              container
              sx={{ width: "100%", height: "60vh", overflow: "auto" }}
            >
              <List sx={{ width: "100%" }}>
                <Divider />
              

                <ListItemButton
                  onClick={() => setOpenPasswordChange(true)}
                  sx={{ width: "100%" }}
                >
                  <ListItemIcon>{IconsMenu("LockResetIcon")}</ListItemIcon>
                  <ListItemText
                    primary={"Cambiar Contraseña"}
                    sx={{ width: "100%" }}
                  />
                </ListItemButton>

                <ListItemButton
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{
                    width: "100%",
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                      xl: "none",
                    },
                  }}
                >
                  <ListItemIcon>{IconsMenu("LogoutOutlinedIcon")}</ListItemIcon>
                  <ListItemText
                    primary={"Cerrar Menú"}
                    sx={{ width: "100%" }}
                  />
                </ListItemButton>

                <ListItemButton  sx={{ width: "100%" }}>
                  <ListItemIcon>{IconsMenu("LogoutOutlinedIcon")}</ListItemIcon>

                  <ListItemText
                    primary={"Cerrar Sesión"}
                    sx={{ width: "100%" }}
                  />
                </ListItemButton>
              </List>
            </Grid>

          </Grid>
        </Drawer>
      </AppBar>


    </Grid>

  );
}