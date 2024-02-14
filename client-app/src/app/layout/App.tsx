import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <div>
      <Header />
      <Outlet />

    </div>
  );
}

export default App;
