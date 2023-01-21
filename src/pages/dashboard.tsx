import StatsCard from "../components/filelist";
import Fileupload from "../components/fileupload";
import WithSubnavigation from "../components/navbar";
import * as React from "react";
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
export const dash = () => (
  <>
    <WithSubnavigation />
    <StatsCard />
    <Fileupload />
  </>
);
