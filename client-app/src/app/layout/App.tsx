import React, { useState, useEffect } from "react";
import { Activity } from "../models/activity";
import { Header } from "./Header";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  const apiUrl = `${process.env.REACT_APP_API_URL}/Activities`;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setActivities(response);
      });
  }, []);

  return (
    <div>
      <Header />

      <ActivityDashboard activities={activities} />
    </div>
  );
}

export default App;
