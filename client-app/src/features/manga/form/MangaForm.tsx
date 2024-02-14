import { useState } from "react";
import styled from "styled-components";
import {v4 as uuid} from "uuid";
import {useAddMangaMutation} from "../../../services/manga";


export const MaterialInput = styled.input`
  width: 100%;
  padding: 2rem;
  outline: none;
  color: black;
  border: 0 solid #9d9d9d;
  border-bottom: 0.1rem solid #9d9d9d;
  letter-spacing: 0.03rem;

  &:focus {
    border-color: #26a69a;
    box-shadow: 0 0.1rem #26a69a;
    background: #f7f7f7;
  }

  &::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background: #26a69a;
  color: #fff;
  cursor: pointer;
  &:hover{
    background: #229e93;
  }
`

export const MangaForm = () => {
  const [domain, setDomain] = useState("");
  const [title, setTitle] = useState("");
  const [addManga] = useAddMangaMutation();
  const handleSubmit = () => {
      const data = {
          id: uuid(),
          title,
          domain,
      };

      addManga(data);
  }
  return (

          <>
              <MaterialInput
                  placeholder='title'
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <MaterialInput
                  placeholder='domain'
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
              />

              <Button type='button' onClick={handleSubmit}>Submit</Button>
          </>


  );
};
