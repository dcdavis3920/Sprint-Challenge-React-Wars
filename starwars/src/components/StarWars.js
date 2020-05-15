import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid red;
`;

const StarWars = (props) => {
  return (
    <Container>
      <h1>{props.name}</h1>
      <h2>{props.height}</h2>
      <h3>{props.mass}</h3>
    </Container>
  );
};
export default StarWars;
