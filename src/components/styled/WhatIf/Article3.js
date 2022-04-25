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
