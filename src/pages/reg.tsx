import * as React from "react"
import WithSubnavigation from "../components/navbar"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useToast
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import Multistep from "../components/reg"

export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
        <Multistep   />
  </ChakraProvider>
)
