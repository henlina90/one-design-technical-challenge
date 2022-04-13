import React from "react";
import {
  StyledCardBody,
  StyledCardDetails,
  StyledCardImage,
  StyledCardTitle,
  StyledInnovatorCard,
} from "./Innovator.css";

const InnovatorDetails = ({ innovator }) => {
  return (
    <StyledInnovatorCard>
      <StyledCardImage>
        <img src={innovator.image} alt={innovator.altText} />
      </StyledCardImage>
      <StyledCardDetails>
        <StyledCardTitle>{innovator.name}</StyledCardTitle>
        <StyledCardBody>{innovator.description}</StyledCardBody>
      </StyledCardDetails>
    </StyledInnovatorCard>
  );
};

export default InnovatorDetails;
