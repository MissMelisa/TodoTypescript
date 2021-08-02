import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MainPage from "./Pages/MainPage";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />

          <VStack spacing={8} display="flex" flexDirection="column">
            <MainPage />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
