import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.css";

export default () => (
  <Router basename={import.meta.env.BASE_URL || ""}>
    <Routes>
      {routes.map((route, index) => {
        const Component = withTracker(() => {
          return (
            <route.layout>
              <route.component />
            </route.layout>
          );
        });
        return (
          <Route
            key={index}
            path={route.path}
            element={<Component />}
          />
        );
      })}
    </Routes>
  </Router>
);
