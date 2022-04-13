import styled from "@emotion/styled";

export const StyledHeaderDetails = styled.div`
  height: 100vh;
  padding: 0px 80px;
  background-color: var(--primary-color);
  color: var(--secondary-color);

  h1 {
    width: 1115px;
    padding-top: 140px;
    padding-bottom: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-style-heading1);
    line-height: 93.56%; /* or 116px */
    letter-spacing: -0.045em;
  }

  .span-text {
    font-family: "Px Grotesk Screen";
  }

  hr {
    opacity: 0.5;
    border: 2px solid var(--secondary-color);
  }

  @media screen and (max-width: 640px) {
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
`;

export const StyledHeaderIcon = styled.div`
  width: 50%;
  padding-top: 30px;
`;

export const StyledHeaderParagraph = styled.div`
  width: 50%;
  padding-top: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  /* or 119% */
`;

export const StyledButton = styled.button`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--secondary-color);
  border: none;

  a {
    font-family: var(--secondary-font-family);
    text-decoration: none;
    color: var(--primary-color);
    text-transform: uppercase;
    padding: 8px 16px;
    font-style: normal;
    font-weight: 800;
    font-size: var(--text-style-eyebrow);
    line-height: 22px; /* identical to box height, or 157% */
  }
`;
