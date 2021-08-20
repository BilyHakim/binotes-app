import React from "react";
import logo from "../../assets/images/header-logo.png";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`;

const Header = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" height="96px" width="96px" />
        <h1>BinoTes App</h1>
      </Container>
    </>
  );
};

export default Header;
