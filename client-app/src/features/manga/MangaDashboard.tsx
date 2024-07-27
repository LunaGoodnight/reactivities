import styled from "styled-components";
import { useGetMangaListQuery } from "../../services/manga";
import { MangaForm } from "./form/MangaForm";
import { MangaItem } from "./MangaItem";
import { useMemo } from "react";

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
  flex-direction: column;
`;

export const MangaDashboard = () => {
  const { data } = useGetMangaListQuery();

  const mangaList = useMemo(() => {
    if (data) {
      return [...data].sort((a, b) => {
        if (a.title && b.title) {
          return a.title.localeCompare(b.title);
        }
        return 0; // Fallback for undefined titles
      });
    } else {
      return [];
    }
  }, [data]);

  return (
      <InnerFlexBox>
        <MangaForm />
        <MangaUl>
          {mangaList.map(({ id, domain, title }) => (
              <MangaItem key={id} title={title} domain={domain} id={id} />
          ))}
        </MangaUl>
      </InnerFlexBox>
  );
};
