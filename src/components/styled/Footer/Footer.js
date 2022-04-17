import React from "react";
import { StyledFooter } from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <small>
        <p>Copyright 2022 &copy; All rights reserved.</p>
        <p class="attribution">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/cawin-chan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cawin Chan
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/yai-yan-lin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yan Lin
          </a>
          , and{" "}
          <a
            href="https://markhh.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark Huang
          </a>
          .
        </p>
      </small>
    </StyledFooter>
  );
}

export default Footer;
