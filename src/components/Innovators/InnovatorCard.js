import React from "react";
import {
  StyledCardDescription,
  StyledCardBody,
  StyledCardImage,
  StyledCardTitle,
  StyledInnovatorCard,
} from "./Innovator.css";

const InnovatorCard = ({ innovator }) => {
  return (
    <StyledInnovatorCard>
      <StyledCardImage>
        <img
          src={innovator.image}
          className="card-image"
          alt={innovator.altText}
        />
      </StyledCardImage>
      <StyledCardBody>
        <StyledCardTitle>{innovator.name}</StyledCardTitle>
        <StyledCardDescription>{innovator.description}</StyledCardDescription>
      </StyledCardBody>
    </StyledInnovatorCard>
  );
};

export default InnovatorCard;
