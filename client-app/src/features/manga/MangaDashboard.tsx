import styled from "styled-components";
import { useGetMangaListQuery } from "../../services/manga";
import { MangaForm } from "./form/MangaForm";
import {MangaItem} from "./MangaItem";

const InnerFlexBox = styled.div`
  width: 80%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  margin: 0 auto;
`;

const MangaUl = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;


export const MangaDashboard = () => {
  const { data } = useGetMangaListQuery();

  return (
    <InnerFlexBox>
      <MangaForm />
      <MangaUl>
        {data
          ? data.map(({ id, domain, title }) => {
              return (
                <MangaItem key={id} title={title} domain={domain} id={id} />
              );
            })
          : null}
      </MangaUl>
    </InnerFlexBox>
  );
};
