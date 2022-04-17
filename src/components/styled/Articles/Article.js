import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledArticleSection } from "./Article.styled";
import IllustrationGrowTogether from "../../../assets/svgs/IllustrationGrowTogether";
import IllustrationFlowingConversations from "../../../assets/svgs/IllustrationFlowingConversations";
import IllustrationsYourUsers from "../../../assets/svgs/IllustrationsYourUsers";
import { StyledButton } from "../Button/Button.styled";

function Article() {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <StyledArticleSection>
      <article>
        <IllustrationGrowTogether />
        <div>
          <h3>WHAT IF</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>
      <article>
        <IllustrationFlowingConversations />
        <div>
          <h3>WHAT IF</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>
      <article>
        <IllustrationsYourUsers />
        <div>
          <h3>WHAT IF</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </article>
      <article>
        <IllustrationsYourUsers />
        <div>
          <h3>WHAT IF</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </article>

      <div className="cta">
        <h2>Ready To Mint Your TeleBlock Identity as an NFT?</h2>
        <StyledButton color={`#fff`} bg={"#0B0033"} onClick={goHome}>
          Get Started
        </StyledButton>
      </div>
    </StyledArticleSection>
  );
}

export default Article;
