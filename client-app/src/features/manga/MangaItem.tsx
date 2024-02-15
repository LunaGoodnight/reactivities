import { useState } from "react";
import styled from "styled-components";
import {
  useDeleteMangaMutation,
  useEditMangaMutation,
} from "../../services/manga";
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
  display: flex;

  justify-content: space-between;
  padding: 1rem 0;
`;

const ButtonRow = styled.div`
  display: flex;

  gap: 1rem;
`;

const DeleteButton = styled.button`
  background: #b2b2b2;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  background: #7acba7;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
`;
export const MangaItem = ({ title, domain, id }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newDomain, setNewDomain] = useState(domain);
  const [newTitle, setNewTitle] = useState(title);

  const [EditManga] = useEditMangaMutation();
  const [DeleteManga] = useDeleteMangaMutation();

  const handleDelete = () => {
    DeleteManga(id);
  };
  const handleEdit = () => {
    const data = {
      id,
      title: newTitle,
      domain: newDomain,
    };

    EditManga(data).then(() => {
      setIsEdit(false);
    });
  };
  return (
    <MangaRow>
      <Top>
        <LeftLink>
          <a href={domain} target="_blank">
            {title}
          </a>
        </LeftLink>

        <Edit type="button" onClick={() => setIsEdit((prev) => !prev)}>
          Edit
        </Edit>
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
          <ButtonRow>
            <DeleteButton type="button" onClick={handleDelete}>
              Delete
            </DeleteButton>
            <SubmitButton type="button" onClick={handleEdit}>
              Done
            </SubmitButton>
          </ButtonRow>
        </EditForm>
      ) : null}
    </MangaRow>
  );
};
