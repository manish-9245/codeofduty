import * as React from "react"
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

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Multistep from "./components/reg"
import CallToActionWithAnnotation from "./components/hero"
import WithSubnavigation from "./components/navbar"
import SimpleCard from "./components/login"
import BasicStatistics from "./components/filelist"
import Fileinput from "./components/fileupload"

export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
      <CallToActionWithAnnotation  />
  </ChakraProvider>
)
