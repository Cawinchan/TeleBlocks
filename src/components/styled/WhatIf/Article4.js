import React from "react";
import { StyledWhatIfSection } from "./WhatIf.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Global.styled";
import theme from "../../../theme";
import Footer from "../Footer/Footer";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

const Article4 = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const readNext = () => {
    navigate("/home");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="appContainer">
          <StyledWhatIfSection>
            <h1>
              WHAT IF you can create your own number on the chain and take full
              control?
            </h1>
            <p>
              Our mission is to drive the separation of power of the mobile
              identity to the masses. This is done through the use of a free,
              open, personalizable TeleBlock Number NFT that belongs to each
              user. Everything is customizable extending past the number
              rhetoric, it allows for letters, symbols, and even emojis. There
              is also another texture element to the TeleBlock number NFT where
              the NFT can include a pictorial and even 3d graphical renders that
              allow for the user to escape the dimensions that restrict their
              idea of how they want their identity to be seen.
            </p>
            <p>
              With TeleBlocks, you can have a private mobile identity that only
              you know, as well as many different public identities that you can
              create to serve different purposes. People can contact you through
              these public identities, but they cannot find your private
              identity. You also have the power to turn off the connection of a
              public identity to your private identity at any time. In this way,
              you have complete control over your mobile identity, your privacy,
              your accessibility. All of this is technically possible with
              blockchain, and today, we're just giving you a first glimpse of
              the possibilities. Click "Explore" to mint your own mobile
              identity with personality.
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
                Explore
              </AwesomeButton>
            </div>
          </StyledWhatIfSection>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Article4;
