import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import C from "./pages/C";
import Login from "./pages/Login";
import R from "./pages/R";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/c" component={C} />
      <Route exact path="/" component={Login} />
      <Route exact path="/r" component={R} />
    </BrowserRouter>
  );
}
