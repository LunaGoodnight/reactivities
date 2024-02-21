import { randomUUID } from "crypto";
import { useState } from "react";
import styled from "styled-components";
import { useAddItemMutation, useGetItemListQuery } from "../../services/item";
import { MessageBox, ModalBox, ModalFrame } from "../../style/modalStyle";
import { MaterialInput } from "../manga/form/MangaForm";
import { Item } from "./Item";
import { v4 as uuid } from "uuid";

const ButtonRow = styled.div`
  display: flex;

  justify-content: flex-end;
`;
const Button = styled.button`
  color: #fff;
  background: #3eb8b8;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
`;

const CloseButton = styled.div`
  color: #8a8a8a;
  position: absolute;

  right: 1rem;
  top: 1rem;
`;

const InnerFlexBox = styled.div`
  width: 80%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  margin: 0 auto;
`;
export const Input = styled.input`
  padding: 1rem;
  border: 1px solid lightgray;
`;

const WrapForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  gap: 1.5rem;
`;

const FormTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;
export const AnythingDashboard = () => {
  const { data } = useGetItemListQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addItem, { isLoading }] = useAddItemMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <InnerFlexBox>
      <ButtonRow>
        <Button type="button" onClick={() => setIsModalOpen(true)}>
          Create
        </Button>
      </ButtonRow>
      <div>
        {isModalOpen && (
          <ModalFrame>
            <ModalBox>
              <CloseButton>x</CloseButton>
              <FormTitle>Insert Anything</FormTitle>
              {isLoading ? (
                "loading"
              ) : (
                <WrapForm>
                  <Input
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    placeholder="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <Button
                    type="button"
                    onClick={() => {
                      if (name !== "" && description !== "") {
                        addItem({
                          id: uuid(),
                          name,
                          description,
                        }).then(() => {
                          setIsModalOpen(false);
                          setName("");
                          setDescription("");
                        });
                      }
                    }}
                  >
                    Submit
                  </Button>
                </WrapForm>
              )}
            </ModalBox>
          </ModalFrame>
        )}
      </div>
      <div>
        {data
          ? data.map(({ id, name, description }) => {
              return (
                <Item key={id} id={id} name={name} description={description} />
              );
            })
          : null}
      </div>
    </InnerFlexBox>
  );
};
