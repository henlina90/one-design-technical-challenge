import React from "react";
import asterisk from "../../assets/svg/asterisk.svg";
import icon from "../../assets/svg/caret-double.svg";
import {
  StyledHeaderButton,
  StyledHeaderDetailContent,
  StyledHeaderDetail,
  StyledHeaderIcon,
  StyledHeaderParagraph,
} from "./Header.css";

const HeaderDetail = () => {
  return (
    <StyledHeaderDetail>
      <h1>
        Women
        <span> Innovators</span> in Computer Science
      </h1>
      <hr />
      <StyledHeaderDetailContent>
        <StyledHeaderIcon>
          <img className="header-icon" src={asterisk} alt="asterisk" />
        </StyledHeaderIcon>
        <StyledHeaderParagraph>
          <p>
            Women have played a vital role in the field of computer science,
            developing some of the most essential components of modern IT. Just
            a few of the achievements women have made include creating the first
            computer program and advancing human space exploration. Take a
            deeper dive into some of these contributions below.
          </p>
          <StyledHeaderButton>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
            <img className="icon" src={icon} alt="icon" />
          </StyledHeaderButton>
        </StyledHeaderParagraph>
      </StyledHeaderDetailContent>
    </StyledHeaderDetail>
  );
};

export default HeaderDetail;
