import React from "react";
import styled from "styled-components";

const FormBlockWrapper = styled.div`
  //width: 100%;
  //margin: 1rem 0;
  //background: #fff;
  width: 28%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    width: 100%;
    padding: 1rem;
  }
`;

const ResetButton = styled.button`

 background: lightgray;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  button {

    flex: 0 0 calc(50% - 4px);
  }
`

export const ActivityForm = () => {
  return (
    <FormBlockWrapper>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Category" />
      <input type="text" placeholder="Date" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Venue" />
        <ButtonRow>

            <ResetButton type="button">Reset</ResetButton>
            <button type="button">Submit</button>
        </ButtonRow>
    </FormBlockWrapper>
  );
};

