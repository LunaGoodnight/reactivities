import React from "react";
import styled from "styled-components";
import { Props } from "./ActivityDashboard";

export const ActivityUl = styled.ul`
  display: flex;
  gap: 1.4%;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: center;

  li {
    width: 32.4%;
    font-size: 1.2rem;
    padding: 1rem 0;
    border-bottom: 1px solid lightgray;
  }
`;

const ActivityTitle = styled.h3`
  font-weight: bold;
`;
export const ActivityList = ({ activities }: Props) => {
  return (
    <ActivityUl>
      {activities.map((x, i) => {
        if (i === 0) {
          return null;
        }
        const { title, description, id } = x;
        return (
          <li key={id}>
            <img
              src={`https://picsum.photos/id/${i + 10}/500/333`}
              alt="beautiful photo"
            />
            <ActivityTitle>{title}</ActivityTitle>
            <div>{description}</div>
          </li>
        );
      })}
    </ActivityUl>
  );
};
