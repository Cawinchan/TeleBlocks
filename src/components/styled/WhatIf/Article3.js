import React from "react";
import { StyledWhatIfSection } from "./WhatIf.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Global.styled";
import theme from "../../../theme";
import Footer from "../Footer/Footer";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

const Article3 = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const readNext = () => {
    navigate("/Article4");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="appContainer">
          <StyledWhatIfSection>
            <h1>
              WHAT IF you can switch Telecom service provider anytime you like?
            </h1>
            <p>
              There are times when other telcos offer attractive promotions that
              you are tempted to try, but you are locked into a single telco
              because you have a long-term contract with them or are not
              comfortable porting your number to a new telco. What if you could
              switch your telecom service provider at any time and there was no
              friction, no downtime and your mobile identity was preserved?
            </p>
            <p>
              In the future, with TeleBlocks, we can develop a telecommunication
              translation layer on the chain, just like the{" "}
              <a
                href="https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DNS
              </a>{" "}
              or{" "}
              <a
                href="https://docs.ens.domains/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ENS
              </a>{" "}
              works today. You can have your own TeleBlocks number as NFT, as a
              mobile identity. However, whenever you want to call a friend, you
              can initiate a connection request on the chain to the designated
              telco you want to use, instead of initiating a phone call to your
              fixed telco. Your designated telco will process your request,
              resolve the destination you want to reach, make sure the
              connection is possible, and take the profit directly from your
              blockchain wallet upon a successful call.
            </p>
            <div>
              <AwesomeButton
                id="AwesomeButton"
                type="secondary"
                size="large"
                action={goBack}
                ripple
              >
                Go Back
              </AwesomeButton>

              <AwesomeButton
                id="AwesomeButton"
                type="secondary"
                size="large"
                action={readNext}
                ripple
              >
                Read Next
              </AwesomeButton>
            </div>
          </StyledWhatIfSection>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Article3;
