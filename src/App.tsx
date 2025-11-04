import { Box, } from "@mui/material";
import NavbarHeader from "./components/NavbarHeader";
import Home from "./sections/Home";

function App() {

  return (
    <>
      <Box sx={{ width: "100%", minHeight: "100vh", justifyContent:"space-between" }}>
        <NavbarHeader />
        <Box
          sx={{
            minHeight: { xs: 80.8, sm: 83.2, md: 89.2, lg: 83.2 },
          }}
        />
        <Home />
        <Box sx={{width: "100%", minHeight: "100vh"}}></Box>*
      </Box>
    </>
  );
}

export default App;
