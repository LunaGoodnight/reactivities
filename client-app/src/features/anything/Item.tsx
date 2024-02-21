import { useState } from "react";
import styled from "styled-components";
import { ItemInterface } from "../../app/models/activity";
import { useEditItemMutation } from "../../services/item";
import { Input } from "./AnythingDashboard";

const WrapRow = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #c1c1c1;
  padding: 2rem 0;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 1.9rem;
  color: #535353;
  padding-bottom: 1rem;
`;

const EditForm = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const Button = styled.button`
  border-radius: 6px;
  background: #dcdcdc;
  cursor: pointer;
  padding: 1rem;
`;

const SubmitButton = styled(Button)`
  background: pink;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`
export const Item = ({ id, name, description }: ItemInterface) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  const [editItem, { isLoading, isSuccess }] = useEditItemMutation();
  return (
    <WrapRow key={id}>
      {isEdit ? (
        <EditForm>
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <Input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </EditForm>
      ) : (
        <div>
          {isLoading ? (
            <div>loading</div>
          ) : (
            <>
              <Name>{name}</Name>
              <div>{description}</div>
            </>
          )}
        </div>
      )}

      <div>
        {isEdit ? (
          <ButtonRow>
            <Button type="button" onClick={() => setIsEdit(false)}>
              Cancel
            </Button>
            <SubmitButton
              type="button"
              onClick={() => {
                editItem({ id, name: newName, description: newDescription }).then(() => {
                    setIsEdit(false)
                });
              }}
            >
              Submit
            </SubmitButton>
          </ButtonRow>
        ) : (
          <Button type="button" onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        )}
      </div>
    </WrapRow>
  );
};
