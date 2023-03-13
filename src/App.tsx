import React from "react";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer/ResponsiveDrawer";
import Router from "./router/router";

function App() {
  return (
    <React.StrictMode>
      <ResponsiveDrawer>
        <Router />
      </ResponsiveDrawer>
    </React.StrictMode>
  );
}

export default App;
