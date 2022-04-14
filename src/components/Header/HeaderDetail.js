import React from "react";
import asterisk from "../../assets/svg/asterisk.svg";
import icon from "../../assets/svg/caret-double.svg";
import {
  StyledHeaderButton,
  StyledHeaderContent,
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
      <StyledHeaderContent>
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
            <a href="#select-innovator">Learn more</a>
            <img className="icon" src={icon} alt="icon" />
          </StyledHeaderButton>
        </StyledHeaderParagraph>
      </StyledHeaderContent>
    </StyledHeaderDetail>
  );
};

export default HeaderDetail;
