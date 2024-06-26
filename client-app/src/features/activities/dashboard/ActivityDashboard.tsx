import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Activity } from "../../../app/models/activity";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

export interface Props {
  activities: Activity[];
}

export const InnerWrapper = styled.div`
  display: flex;
`;

export const WidthWrapper = styled.div`
  width: 80%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const RightWrapper = styled.div`
  width: 30%;
  padding: 1rem;
`;

const TopActivity = styled.div`
  width: 78%;

  img {
    //width: 100%;
  }
`;

const TopWrap = styled.div`
  gap: 2%;
  display: flex;
  padding-top: 2rem;
`;
export const ActivityDashboard = () => {
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
      <WidthWrapper>
        <TopWrap>
          <TopActivity>
            <div>
              <img src="https://picsum.photos/800/300" alt="picsum" />
            </div>

            <div>{activities[0] && activities[0].title}</div>
          </TopActivity>
          <ActivityForm />
        </TopWrap>

        {/*<RightWrapper>*/}
        {/*  {activities[0] && <ActivityDetails activity={activities[0]} />}*/}
        {/*</RightWrapper>*/}
        <ActivityList activities={activities} />
      </WidthWrapper>
    </div>
  );
};
