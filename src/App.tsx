import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Main from "./pages/main";
import Exif from "./pages/exif";
import Rot from "./pages/rot";
import Regex from "./pages/regex";

import "./globalStyle.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/decoders" component={Main} />
        <Route exact path="/exif" component={Exif} />
        <Route exact path="/rot-n" component={Rot} />
        <Route exact path="/regex" component={Regex} />
        <Redirect from="*" to="/decoders" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
