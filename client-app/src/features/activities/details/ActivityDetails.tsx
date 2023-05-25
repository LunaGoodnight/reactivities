import React from "react";
import styled from "styled-components";
import { Activity } from "../../../app/models/activity";

export const DetailsBlock = styled.div`
  padding: 1rem;
  background: gainsboro;
  font-size: 0.9rem;
`;

interface Props {
  activity: Activity;
}

export const ActivityDetails = ({ activity }: Props) => {
  const { description, title, city, date } = activity;
  return (
    <DetailsBlock>
      <div>{title}</div>
      <div>{city}</div>
      <div>{date}</div>
      <div>{description}</div>
    </DetailsBlock>
  );
};
