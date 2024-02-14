import { useEffect, useState } from "react";
import styled from "styled-components";
import {  MangaLink } from "../../app/models/activity";
import {useGetMangaListQuery} from "../../services/manga";
import { MangaForm } from "./form/MangaForm";

const InnerFlexBox = styled.div`
  width: 80%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  margin: 0 auto;
`;
export const MangaDashboard = () => {
  const [mangaList, setMangaList] = useState<MangaLink[]>([]);
  const {data} = useGetMangaListQuery();

  return (
    <InnerFlexBox>
      <MangaForm />
      {data && data.map(({ id, domain, title }) => {
        return (
          <div key={id}>
            <a href={domain}>{title}</a>
          </div>
        );
      })}
    </InnerFlexBox>
  );
};
