import styled from "@emotion/styled";

/* index.js */

export const StyledInnovators = styled.section`
  min-height: 100vh;
  padding: 32px;
  background-color: var(--secondary-color-white);
  color: var(--primary-color-blue);

  @media screen and (max-width: 640px) {
    padding: 24px;
  }
`;

export const StyledOptions = styled.div`
  font-family: var(--secondary-font-family);
  font-size: var(--text-style-eyebrow);
  padding-bottom: 24px;

  label,
  select {
    text-transform: uppercase;
  }

  label {
    display: block;
    padding-bottom: 12px;
  }

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: 12px;
    width: 413px;
    border: 1px solid var(--primary-color-blue);
    color: var(--primary-color-blue);

    background-image: url("./caret.svg");
    background-repeat: no-repeat;
    background-position: calc(100% - 8px) center;
    background-size: 10px;
  }

  @media screen and (max-width: 640px) {
    select {
      width: 100%;
    }
  }
`;

/* InnovatorCard.js */

export const StyledInnovatorCard = styled.div`
  transition: all 0.3s ease;
  display: flex;
  max-width: 738px;
  max-height: 443px;
  background-color: var(--secondary-color-white);
  border: 1px solid var(--primary-color-blue);
  color: var(--primary-color-blue);

  :hover {
    background-color: var(--primary-color-blue);
    color: var(--secondary-color-white);

    .card-image {
      transform: scale(1.1);
    }
  }


  .card-image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
    transition: all 0.3s ease;
  }


  @media screen and (max-width: 640px) {
    flex-direction: column;
    min-width: 100%;
    max-height: 650px;
    }
  }
`;

export const StyledCardImage = styled.div`
  display: flex;
  overflow: hidden;
  width: 380px;
  height: 443px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60%;
  padding: 24px;

  @media screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const StyledCardTitle = styled.h2`
  font-size: var(--text-style-lg);
  width: 100%;

  @media screen and (max-width: 640px) {
    padding-bottom: 8px;
  }
`;

export const StyledCardDescription = styled.p`
  font-size: var(--text-style-body);
  font-family: var(--font-family-regular);
  font-weight: 400;
  line-height: 24px;
`;
