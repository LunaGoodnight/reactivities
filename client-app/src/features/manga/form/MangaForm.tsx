import { useState } from "react";
import styled from "styled-components";
import {v4 as uuid} from "uuid";


export const MaterialInput = styled.input`
  width: 100%;
  padding: 1rem;
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


const Wrap = styled.div`
width: 100%;
`

export const MangaForm = () => {
  const [domain, setDomain] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
      const apiUrl = `${process.env.REACT_APP_API_URL}/Manga`;
      const data = {
          id: uuid(),
          title,
          domain,
      };

      try {
          const response = await fetch(apiUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
          });
          if (response) {
              const final = response.json();
              console.log({ final });
          }
      } catch (e) {
          console.log({ e });
      }
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

              <button type='button' onClick={handleSubmit}>Submit</button>
          </>


  );
};
