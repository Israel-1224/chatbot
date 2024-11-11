import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Breadcrumbs,
} from "@mui/material";

import { useState } from "react";

export const MenuBanorte = () => {
  // Estado para controlar el Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Función para abrir/cerrar el Drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#AE1C3E" }}> {/* Color rojo Banorte */}
        <Toolbar sx={{ height: ["7vh", "7vh", "7vh", "7vh", "7vh"], width: "100vw" }}>
          <Grid container sx={{ height: "100%", display: "flex" }}>
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
              {/* Botón para abrir el Drawer */}
              <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
                <Tooltip title="Menu Lateral">
                  <IconButton size="large" color="inherit" onClick={toggleDrawer}>
                    Menu
                  </IconButton>
                </Tooltip>
              </Grid>

              {/* Breadcrumbs (puedes personalizar los textos o iconos aquí) */}
              <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                <Grid
                  container
                  item
                  xl={10}
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{
                      fontFamily: "MontserratBold",
                      fontSize: ["4vw", "3vw", "3vw", "1.5vw", "1.5vw"],
                      color: "white",
                    }}
                  >
                    {/* Aquí puedes agregar enlaces o elementos del Breadcrumb */}
                    Inicio
                  </Breadcrumbs>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>

        {/* Drawer */}
        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
           <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <Grid
            container
            sx={{
              width: ["100vw", "100vw", "60vw", "40vw", "30vw"],
              height: "100vh",
            }}
          >
            <Divider />
            {/* Aquí puedes agregar el contenido del Drawer */}
          </Grid>
        </Drawer>

        </Grid>
       
      </AppBar>
    </Grid>
  );
};
