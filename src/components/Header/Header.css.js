import styled from "@emotion/styled";

export const StyledHeaderDetail = styled.div`
  background-color: var(--primary-color-blue);
  color: var(--secondary-color-white);
  padding: 72px;
  min-height: 100vh;

  h1 {
    width: 1115px;
    margin: 128px 0px 56px 0px;
    font-weight: 400;
    font-size: var(--text-style-heading1);
    line-height: 93.56%;
    letter-spacing: -0.045em;
  }

  span {
    font-family: var(--secondary-font-family);
  }

  hr {
    opacity: 0.5;
    border: 2px solid var(--secondary-color-white);
  }

  p {
    font-size: var(--text-style-lg);
    line-height: 31px;
    margin-bottom: 32px;
  }

  a {
    font-family: var(--secondary-font-family);
    text-decoration: none;
    color: var(--primary-color-blue);
    text-transform: uppercase;
    padding: 8px 16px;
    font-weight: 800;
    font-size: var(--text-style-eyebrow);
    line-height: 22px;
  }

  a:hover {
    color: var(--secondary-color-white);
  }

  @media screen and (max-width: 640px) {
    height: 847px;
    padding: 24px;

    h1 {
      font-size: 68px;
      line-height: 96.5%;
      width: 100%;
      margin: 88px 0px 24px 0px;
    }

    p {
      font-size: var(--text-style-body);
      line-height: 24px;
    }
  }
`;

export const StyledHeaderDetailContent = styled.div`
  display: flex;
  margin: 56px 0px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 28px;
    margin: 24px 0px;
  }
`;

export const StyledHeaderIcon = styled.div`
  width: 100%;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .header-icon {
    animation-name: spin;
    animation-duration: 3s;
    width: 100px;
  }

  @media screen and (max-width: 640px) {
    .header-icon {
      width: 50px;
    }
  }
`;

export const StyledHeaderParagraph = styled.div`
  width: 100%;
`;

export const StyledHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary-color-white);
  border: 1px solid var(--primary-color-blue);

  :hover {
    background-color: var(--primary-color-blue);
    border: 1px solid var(--secondary-color-white);
  }

  @media screen and (max-width: 640px) {
    width: 56%;

    .icon {
      margin-right: 16px;
    }
  }
`;
