import { Grid, Grid2 } from "@mui/material";
import { Chatbot } from "./components/chatbot";
import escudo from "../../assets/logos/escudo.png";
import { MenuBanorte } from "./components/Menu";
import Banorte from "../../logos/Banorte.png"

const estiloImagen = {
  width: "60%",
  height: "60%", // Valor predeterminado para pantallas menores de 600px
};

if (window.innerWidth >= 600) {
  estiloImagen.height = "60%";
  estiloImagen.width = "100%";
}

export const Home = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //background: "red",
      }}
      container
      direction="row"
    //overflow="auto"
    >
      {/* <Grid2 sx={{background: "red"}}>
hola0
</Grid2 >

<Grid2 sx={{background: "blue"}}>
hola1
</Grid2>

<Grid2 sx={{background: "green"}}>
  hola2
</Grid2>

<Grid2 sx={{background: "black"}}>
  hola3
</Grid2> */}


      <Grid sx={{ height: "7vh", }} >
        <MenuBanorte   />
      </Grid>

      <Grid
        item
        sx={{
          // height: "100%",
          height: "93vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <TutorialBox initialState={0} endState={8} /> */}

        <img src={Banorte} alt="Escudo" style={estiloImagen} />
      </Grid>


      <Chatbot />



      {/* <Grid
        item
        sx={{
          // height: "100%",
          height: "93vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "blue"
        }}
      >
  
   
      </Grid>  */}
    </Grid>
  );
};


