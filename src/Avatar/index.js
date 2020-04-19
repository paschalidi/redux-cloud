import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 50%;

  height: ${({ type }) => {
    if (type === "small") {
      return "40px";
    }
    return "auto";
  }};
`;

const Avatar = ({ url, alt, type }) => {
  return <StyledImage src={url} alt={alt} type={type} />;
};

export default Avatar;
