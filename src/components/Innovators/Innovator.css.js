import styled from "@emotion/styled";

/* index.js */

export const StyledInnovators = styled.div`
  min-height: 100vh;
  padding: 72px;
  background-color: var(--secondary-color-white);
  color: var(--primary-color-blue);

  @media screen and (max-width: 640px) {
    padding: 24px;
  }
`;

export const StyledOptions = styled.div`
  font-weight: 800;
  line-height: 93.56%;
  font-family: var(--secondary-font-family);
  font-size: var(--text-style-eyebrow);

  label,
  select {
    text-transform: uppercase;
  }

  label {
    display: block;
    margin-bottom: 12px;
  }

  select {
    border: 1px solid var(--primary-color-blue);
    color: var(--primary-color-blue);
    padding: 12px;
    width: 413px;
    margin-bottom: 28px;
  }

  @media screen and (max-width: 640px) {
    select {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`;

/* InnovatorDetail.js */

export const StyledInnovatorCard = styled.div`
  display: flex;
  max-width: 738px;
  max-height: 443px;
  border: 1px solid var(--primary-color-blue);
  color: var(--primary-color-blue);
  background-color: var(--secondary-color-white);

  .card-image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
    transition: all 0.2s linear;
  }

  .card-image:hover {
    transform: scale(1.1);
  }

  :hover {
    color: var(--secondary-color-white);
    background-color: var(--primary-color-blue);

  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    min-width: 100%;
    max-height: 650px;
    }
  }
`;

export const StyledCardImage = styled.div`
  overflow: hidden;

  display: flex;
  width: 380px;
  height: 443px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60%;
  padding: 20px;

  @media screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const StyledCardTitle = styled.h2`
  font-size: var(--text-style-lg);
  width: 100%;

  @media screen and (max-width: 640px) {
    margin-bottom: 8px;
  }
`;

export const StyledCardBody = styled.p`
  font-size: var(--text-style-body);
  font-family: var(--font-family-regular);
  font-weight: 400;
  line-height: 24px;
`;
