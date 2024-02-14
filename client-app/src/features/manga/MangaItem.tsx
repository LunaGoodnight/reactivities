import { useState } from "react";
import styled from "styled-components";
import {useEditMangaMutation} from "../../services/manga";
import { MaterialInput } from "./form/MangaForm";

const MangaRow = styled.li`
  display: flex;
  width: 100%;

  flex-direction: column;
`;
const Title = styled.div`
  width: 80%;
`;

interface IProps {
  id: string;
  title: string;
  domain: string;
}

const LeftLink = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const Edit = styled.button`
  width: 10%;

  text-align: center;
  cursor: pointer;
  padding: 1rem;
`;

const EditForm = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;

  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background: #5fb6ae;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
`
export const MangaItem = ({ title, domain, id }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newDomain, setNewDomain] = useState(domain);
  const [newTitle, setNewTitle] = useState(title);

  const [EditManga] = useEditMangaMutation()
  const handleEdit = () => {


    const data = {

      id,
      title: newTitle,
      domain: newDomain,
    }

    EditManga(data);
  };
  return (
    <MangaRow>
      <Top>
        <LeftLink>

          <a href={domain} target="_blank">
            {title}
          </a>
        </LeftLink>
        <Edit type='button' onClick={() => setIsEdit((prev) => !prev)}>Edit</Edit>
      </Top>
      {isEdit ? (
        <EditForm>
          <div>
            <MaterialInput
              placeholder="title"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <MaterialInput
              placeholder="domain"
              type="text"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
            />
          </div>

          <SubmitButton onClick={handleEdit}>Send</SubmitButton>
        </EditForm>
      ) : null}
    </MangaRow>
  );
};
