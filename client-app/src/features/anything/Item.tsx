import {ItemInterface} from "../../app/models/activity";

export const Item = ({ id, name, description }: ItemInterface) => {
  return (
    <div key={id}>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};
