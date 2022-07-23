import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Input = ({ type = "text", label = "", placeholder = "" }) => {
  return (
    <Container>
      <label>
        {label}
        <input type={type} placeholder={placeholder} />
      </label>
    </Container>
  );
};

export default Input;
