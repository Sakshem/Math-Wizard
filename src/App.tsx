import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" height="100%" width="100%">
        <HomePage />
      </GridItem>
    </Grid>
  );
}

export default App;
