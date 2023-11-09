import SimpleCard from "../components/login"
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
export const dash = () => (
    <><WithSubnavigation />
        <SimpleCard /></>
)