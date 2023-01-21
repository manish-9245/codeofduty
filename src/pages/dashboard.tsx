
import Fileupload from "../components/fileupload";
import WithSubnavigation from "../components/navbar";
import * as React from "react";
import BasicStatistics from "../components/filelist"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useToast,
} from "@chakra-ui/react";
import Loginav from "../components/loginav";
export const dash = () => (
  <>
    <Loginav />
    <Fileupload />
  </>
    
);
