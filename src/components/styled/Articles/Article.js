import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme";
import ShareLinkSvg from "../../../assets/svgs/ShareLinkSvg";
import SocialGirlSvg from "../../../assets/svgs/SocialGirlSvg";
import PhoneCallSvg from "../../../assets/svgs/PhoneCallSvg";
import EtherSvg from "../../../assets/svgs/EtherSvg";

import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";
import { StyledButton } from "../Button/Button.styled";
import { StyledArticleSection } from "./Article.styled";

function Article() {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  const goExplore = () => {
    navigate("/explore");
  };

  const svgColor = theme.color.themeColorB;

  return (
    <>
      <StyledArticleSection>
        <h1>Imagine - WHAT IF ...</h1>
        <article>
          <SocialGirlSvg themeColor={svgColor} />
          <div>
            <h2>
              <b>WHAT IF</b> you can control who gets access to your information
              through your mobile number?
            </h2>
            <p>
              Your mobile number can be used to get personal information about
              you easily through the use of people look-up sites. This
              information can then allow anyone to attack you with targeted ads
              or even hack into your online accounts!
            </p>
            <AwesomeButton
              id="AwesomeButton"
              type="secondary"
              size="large"
              action={goExplore}
              ripple
            >
              Read More
            </AwesomeButton>
          </div>
        </article>
        <article>
          <ShareLinkSvg height={250} themeColor={svgColor} />
          <div>
            <h2>
              <b>WHAT IF</b> you can control who has your mobile number?
            </h2>
            <p>
              The phone numbers we use for quick logins to accounts and 2FA
              verification can be easily used for purposes other than what was
              promised by companies. Additionally, our mobile numbers can be
              used to improve our experience while using different social media
              applications, but it could also lead to many privacy issues when
              it causes you to share more than you're willing to.
            </p>
            <AwesomeButton
              id="AwesomeButton"
              type="secondary"
              size="large"
              action={goExplore}
              ripple
            >
              Read More
            </AwesomeButton>
          </div>
        </article>
        <article>
          <PhoneCallSvg themeColor={svgColor} />
          <div>
            <h2>
              <b>WHAT IF</b> you can switch Telecom service provider anytime you
              like?
            </h2>
            <p>
              There are times when other telcos offer attractive promotions that
              you are tempted to try, but you are locked into a single telco
              because you have a long-term contract with them or are not
              comfortable porting your number to a new telco. What if you could
              switch your telecom service provider at any time and there was no
              friction, no downtime and your mobile identity was preserved?
            </p>
            <AwesomeButton
              id="AwesomeButton"
              type="secondary"
              size="large"
              action={goExplore}
              ripple
            >
              Read More
            </AwesomeButton>
          </div>
        </article>
        <article>
          <EtherSvg height={350} themeColor={svgColor} />
          <div>
            <h2>
              <b>WHAT IF</b> you can create your own number on the chain and
              take full control?
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <AwesomeButton
              id="AwesomeButton"
              type="secondary"
              size="large"
              action={goExplore}
              ripple
            >
              Try Now
            </AwesomeButton>
          </div>
        </article>

        {/* <div className="cta">
          <h2>Ready To Mint Your TeleBlock Identity as an NFT?</h2>
          <StyledButton color={`#fff`} bg={"#0B0033"} onClick={goHome}>
            Get Started
          </StyledButton>
        </div> */}
      </StyledArticleSection>
    </>
  );
}

export default Article;
