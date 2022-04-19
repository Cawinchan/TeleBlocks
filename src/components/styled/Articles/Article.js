import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledArticleSection } from "./Article.styled";
import IllustrationGrowTogether from "../../../assets/svgs/IllustrationGrowTogether";
import IllustrationFlowingConversations from "../../../assets/svgs/IllustrationFlowingConversations";
import IllustrationsYourUsers from "../../../assets/svgs/IllustrationsYourUsers";
import { StyledButton } from "../Button/Button.styled";
import { AwesomeButton } from "react-awesome-button";

function Article() {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <>
      <StyledArticleSection>
        <article>
          <IllustrationGrowTogether />
          <div>
            <h2>
              WHAT IF you can protect your personal information from malicious
              hackers?
            </h2>
            <p>
              Everyone (hopefully) already knows that all your online activity
              is easily tracked through the use of third party cookies on all
              kinds of websites. However, did you know that your mobile number
              can be used to find out about all kinds of personal information?
              According to mobile security firm Fyde, our mobile number might be
              a stronger identifier than our full name. For the low barrier of
              $5 and 1 hour, malicious hackers can easily find your current home
              addresses, all your past addresses, full names of your family,
              past phone numbers and even your criminal record. This information
              can be easily used to hack into your online accounts, hijacking
              your number, target your number with phishing texts and robocalls.
              Even more legitimate companies like marketers can use your mobile
              number to target ads.
            </p>
            <AwesomeButton
              type="secondary"
              size="medium"
              // action={}
            >
              Read More
            </AwesomeButton>
          </div>
        </article>
        <article>
          <IllustrationFlowingConversations />
          <div>
            <h2>WHAT IF </h2>
            <p>
              There are times when other telcos offer attractive promotions that
              you are tempted to try, but you are locked into a single telco
              because you have a long-term contract with them or are not
              comfortable porting your number to a new telco. What if you could
              switch your telecom service provider at any time and there was no
              friction, no downtime and your mobile identity was preserved?
            </p>
          </div>
        </article>
        <article>
          <IllustrationsYourUsers />
          <div>
            <h2>WHAT IF</h2>
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
    </>
  );
}

export default Article;
