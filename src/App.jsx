import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.css";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL || ""}>
      <Routes>
        {routes.map((route, index) => {
          const RouteComponent = route.component;
          const Layout = route.layout;

          const Component = withTracker(() => (
            <Layout>
              <RouteComponent />
            </Layout>
          ));

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
}
