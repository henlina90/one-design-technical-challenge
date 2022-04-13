import styled from "@emotion/styled";

export const StyledInnovators = styled.div`
  height: 100vh;
  padding: 24px 80px;
  color: var(--primary-color);
`;

export const StyledOptions = styled.label`
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
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 12px;
    width: 413px;
  }
`;

export const StyledInnovatorCard = styled.div`
  display: flex;
  width: 738px;
  height: 443px;
  border: 1px solid var(--primary-color);
  margin-top: 32px;
  color: var(--primary-color);
`;

export const StyledCardTitle = styled.h2`
  font-size: var(--text-style-lg);
  width: 100%;
`;

export const StyledCardBody = styled.p`
  font-size: var(--text-style-body);
  font-family: var(--font-family-regular);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px; /* or 136% */
`;

export const StyledCardImage = styled.div`
  display: flex;
  max-width: 366px;
  max-height: 443px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60%;
  padding: 32px;
`;
