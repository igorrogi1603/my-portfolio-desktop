import React from "react";
import { Routes, Route } from "react-router-dom";

import DesktopHome from "../modules/desktop/screen/home";

const RouteApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DesktopHome />} />
      <Route path="*" element={<h1>Blue Page</h1>} />
    </Routes>
  );
};

export default RouteApp;
