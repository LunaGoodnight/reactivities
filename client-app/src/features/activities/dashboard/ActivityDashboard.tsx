import React, { useEffect } from "react";
import styled from "styled-components";
import { Activity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails, DetailsBlock } from "../details/ActivityDetails";

export interface Props {
  activities: Activity[];
}

export const InnerWrapper = styled.div`
  display: flex;
`;

export const WidthWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const RightWrapper = styled.div`
  width: 30%;
  padding: 1rem;
`;

const TopActivity = styled.div`
  width: 100%;
  padding-top: 2rem;
  img {
    width: 100%;
  }
`;
export const ActivityDashboard = ({ activities }: Props) => {
  return (
    <div>
      <WidthWrapper>
        <TopActivity>
          <div>
            <img src="https://picsum.photos/800/300" alt="picsum" />
          </div>

          <div>{activities[0] && activities[0].title}</div>
        </TopActivity>

        {/*<RightWrapper>*/}
        {/*  {activities[0] && <ActivityDetails activity={activities[0]} />}*/}
        {/*</RightWrapper>*/}
        <ActivityList activities={activities} />
      </WidthWrapper>
    </div>
  );
};
