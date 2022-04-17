import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobeIllustration from "../../../assets/svgs/GlobeIllustration";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";

function Header() {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <StyledHeader>
      <nav>
        <h1>TeleBlocks</h1>
        <StyledButton color={`#111`} bg={"#fff"} onClick={goHome}>
          Try It Now
        </StyledButton>
      </nav>

      <section className="headerContent">
        <article>
          <h1>Re-imagine the Equitable Telecommunications</h1>
          <p>
            TeleBlocks re-imagines the way we build telecommunication networks
            with the power of blockchain.
          </p>
        </article>
        <GlobeIllustration />
      </section>
    </StyledHeader>
  );
}

export default Header;
