import { useState } from "react";
import styled from "styled-components";
import { useGetItemListQuery } from "../../services/item";
import { MessageBox, ModalBox, ModalFrame } from "../../style/modalStyle";
import { Item } from "./Item";

const ButtonRow = styled.div`
display: flex;
  
  justify-content: flex-end;
`
const Button = styled.button`

  color: #fff;
  background: #3eb8b8;
  border-radius: 8px;
  padding: 1rem;
`

const CloseButton = styled.div`
  color: #8a8a8a;

`

const InnerFlexBox = styled.div`
  width: 80%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  margin: 0 auto;
`;

export const AnythingDashboard = () => {
  const { data } = useGetItemListQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <InnerFlexBox>

        <ButtonRow>
            <Button type='button' onClick={() => setIsModalOpen(true)}>Create</Button>
        </ButtonRow>
      <div>
        {isModalOpen && (
          <ModalFrame>
            <ModalBox>
              <MessageBox>
                  <CloseButton>x</CloseButton>

              </MessageBox>
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
