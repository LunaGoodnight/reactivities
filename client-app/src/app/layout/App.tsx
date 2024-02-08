import React, { useState, useEffect } from "react";
import { Activity } from "../models/activity";
import { Header } from "./Header";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
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
