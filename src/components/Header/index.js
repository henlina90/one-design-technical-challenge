import React from "react";
import "./Header.css.js";
import asterisk from "../../assets/svg/asterisk.svg";
import {
  StyledHeaderButton,
  StyledHeaderContent,
  StyledHeader,
  StyledHeaderIcon,
  StyledHeaderBody,
} from "./Header.css";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        Women
        <span> Innovators</span> in Computer Science
      </h1>
      <hr />
      <StyledHeaderContent>
        <StyledHeaderIcon>
          <img className="header-icon" src={asterisk} alt="asterisk" />
        </StyledHeaderIcon>
        <StyledHeaderBody>
          <p>
            Women have played a vital role in the field of computer science,
            developing some of the most essential components of modern IT. Just
            a few of the achievements women have made include creating the first
            computer program and advancing human space exploration. Take a
            deeper dive into some of these contributions below.
          </p>
          <StyledHeaderButton>
            <a href="#select-innovator">
              Learn more
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.173981 5.71912L1.89898 5.71912L1.89898 7.37518L0.173981 7.37518L0.173981 5.71912ZM7.07398 5.71912L8.79898 5.71912L8.79898 7.37518L7.07398 7.37518L7.07398 5.71912ZM1.89898 7.37518L3.62398 7.37518L3.62398 9.03125L1.89898 9.03125L1.89898 7.37518ZM5.34898 7.37518L7.07398 7.37518L7.07398 9.03125L5.34898 9.03125L5.34898 7.37518ZM3.62398 9.03125L5.34898 9.03125L5.34898 10.6921L3.62398 10.6921L3.62398 9.03125Z"
                  fill="#0000FF"
                  className="icon"
                />
                <path
                  d="M0.173981 0.719116L1.89898 0.719116L1.89898 2.37518L0.173981 2.37518L0.173981 0.719116ZM7.07398 0.719116L8.79898 0.719116L8.79898 2.37518L7.07398 2.37518L7.07398 0.719116ZM1.89898 2.37518L3.62398 2.37518L3.62398 4.03125L1.89898 4.03125L1.89898 2.37518ZM5.34898 2.37518L7.07398 2.37518L7.07398 4.03125L5.34898 4.03125L5.34898 2.37518ZM3.62398 4.03125L5.34898 4.03125L5.34898 5.69208L3.62398 5.69208L3.62398 4.03125Z"
                  fill="#0000FF"
                  className="icon"
                />
              </svg>
            </a>
          </StyledHeaderButton>
        </StyledHeaderBody>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
