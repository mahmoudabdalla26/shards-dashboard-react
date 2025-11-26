import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const withTracker = (WrappedComponent, options = {}) => {
  const TrackedComponent = (props) => {
    const location = useLocation();

    useEffect(() => {
      if (import.meta.env.MODE !== "production") {
        return;
      }

      const page = location.pathname + location.search;
      console.log("Tracking page:", page);
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return TrackedComponent;
};

export default withTracker;
