import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  min-height: 100vh;
  padding: 32px 80px;
  background-color: var(--primary-color-blue);
  color: var(--secondary-color-white);

  h1 {
    padding: 164px 164px 56px 0px;
    font-size: var(--text-style-heading1);
    font-weight: 400;
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

  @media screen and (max-width: 640px) {
    height: 847px;
    padding: 24px;

    h1 {
      padding: 88px 0px 24px 0px;
      width: 100%;
      font-size: 68px;
      line-height: 96.5%;
    }
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  padding: 56px 0px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 28px;
    padding: 24px 0px;
  }
`;

export const StyledHeaderIcon = styled.div`
  width: 100%;

  .header-icon {
    animation-name: spin;
    animation-duration: 1s;
    width: 100px;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 640px) {
    .header-icon {
      width: 50px;
    }
  }
`;

export const StyledHeaderBody = styled.div`
  width: 100%;

  p {
    font-size: var(--text-style-lg);
    line-height: 31px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 640px) {
    p {
      font-size: var(--text-style-body);
      line-height: 24px;
    }
  }
`;

export const StyledHeaderButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: var(--secondary-color-white);
  border: 1px solid var(--primary-color-blue);

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    text-decoration: none;
    color: var(--primary-color-blue);
    font-size: var(--text-style-eyebrow);
    font-family: var(--secondary-font-family);
    text-transform: uppercase;
    font-weight: 800;
    line-height: 22px;
  }

  :hover {
    background-color: var(--primary-color-blue);
    border: 1px solid var(--secondary-color-white);

    a {
      color: var(--secondary-color-white);
    }

    .icon {
      fill: var(--secondary-color-white);
    }
  }
`;
