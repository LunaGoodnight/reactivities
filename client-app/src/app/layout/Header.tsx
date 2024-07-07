import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../images/logo.webp";

const HeaderWrapper = styled.div`
  width: 100%;
  color: dimgray;
  font-weight: bold;
  //background: cornflowerblue;
  //background: linear-gradient(45deg, #3ab0f6, #b0c1f8);
  background: linear-gradient(45deg, #e1e1cc, #e6e6e6);
`;
const InnerFlexBox = styled.div`
  width: 80%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  margin: 0 auto;
`;
const LogoStyle = styled.div`
  width: 9rem;
`;

const NavList = styled.ul`
  display: flex;
  li {
    padding: 0 1rem;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <InnerFlexBox>
        <LogoStyle>
          <Link to={`/`}>
            <img src={Logo} alt="logo" />
          </Link>
        </LogoStyle>
        <NavList>
          <li>
            <Link to={`manga`}>Manga</Link>
          </li>
          <li>
            <Link to={`anything`}>Anything</Link>
          </li>
        </NavList>
      </InnerFlexBox>
    </HeaderWrapper>
  );
};
