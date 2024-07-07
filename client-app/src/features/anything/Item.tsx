import { useState } from "react";
import styled from "styled-components";
import { ItemInterface } from "../../app/models/activity";
import {
  useDeleteItemMutation,
  useEditItemMutation,
} from "../../services/item";
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

const EditButton = styled(Button)`
  background: #abdadf;
  color: #4c4c4c;
`;

const DeleteButton = styled(Button)`
  background: #cbcbcb;
  color: #585858;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`;


const domain = 'https://catsheue-001-site4.atempurl.com'
export const Item = ({ id, name, description, imageUrl }: ItemInterface) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState<File | null>(null);

  const [editItem, { isLoading, isSuccess }] = useEditItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  return (
      <WrapRow key={id}>
        {isEdit ? (
            <EditForm>
              <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
              <Input
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
              />
              <Input
                  type="file"
                  onChange={(e) => setNewImage(e.target.files?.[0] || null)}
              />
            </EditForm>
        ) : (
            <div>
              {isLoading ? (
                  <div>loading</div>
              ) : (
                  <>
                    <div>{imageUrl && <img src={`${domain}${imageUrl}`} alt="Item image" />}</div>
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
                      const formData = new FormData();
                      formData.append("id", id);
                      formData.append("name", newName);
                      formData.append("description", newDescription);
                      if (newImage) {
                        formData.append("image", newImage);
                      }

                      editItem(formData).then(() => {
                        setIsEdit(false);
                      });
                    }}
                >
                  Submit
                </SubmitButton>
              </ButtonRow>
          ) : (
              <ButtonRow>
                <DeleteButton
                    type="button"
                    onClick={() => {
                      deleteItem(id);
                    }}
                >
                  Delete
                </DeleteButton>
                <EditButton type="button" onClick={() => setIsEdit(true)}>
                  Edit
                </EditButton>
              </ButtonRow>
          )}
        </div>
      </WrapRow>
  );
};
