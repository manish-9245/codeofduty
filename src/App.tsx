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
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Multistep from "./components/reg";
import CallToActionWithAnnotation from "./components/hero";
import WithSubnavigation from "./components/navbar";
import SimpleCard from "./components/login";
import BasicStatistics from "./components/filelist";
import Public from "./components/public";
import Fileupload from "./components/fileupload";
export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
    {/* <Fileupload /> */}
    {/* <CallToActionWithAnnotation  /> */}
    <Router>
      <Switch>
        <Route path="/file/:id" component={Public} />
        <Route path="/login" component={SimpleCard} />
        <Route path="/register" component={Multistep} />
        <Route path="/dashboard" component={BasicStatistics} />
        <Route path="/" component={CallToActionWithAnnotation} />
        {/* <Route path="/" component={CallToActionWithAnnotation} /> */}
      </Switch>
    </Router>
  </ChakraProvider>
);
