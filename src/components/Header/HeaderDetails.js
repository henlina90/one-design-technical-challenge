import React from "react";
import logo from "../../assets/svg/asterisk.svg";
import icon from "../../assets/svg/caret-double.svg";
import {
  StyledButton,
  StyledHeaderContent,
  StyledHeaderDetails,
  StyledHeaderIcon,
  StyledHeaderParagraph,
} from "./Header.css";

const HeaderDetails = () => {
  return (
    <StyledHeaderDetails>
      <h1>
        Women
        <span className="span-text"> Innovators</span> in Computer Science
      </h1>
      <hr />
      <StyledHeaderContent>
        <StyledHeaderIcon>
          <img src={logo} alt="logo" />
        </StyledHeaderIcon>
        <StyledHeaderParagraph>
          <p>
            Women have played a vital role in the field of computer science,
            developing some of the most essential components of modern IT. Just
            a few of the achievements women have made include creating the first
            computer program and advancing human space exploration. Take a
            deeper dive into some of these contributions below.
          </p>
          <StyledButton>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
            <img src={icon} alt="logo" />
          </StyledButton>
        </StyledHeaderParagraph>
      </StyledHeaderContent>
    </StyledHeaderDetails>
  );
};

export default HeaderDetails;
