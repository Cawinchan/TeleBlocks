import React from "react";
import { StyledWhatIfSection } from "./WhatIf.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Global.styled";
import theme from "../../../theme";
import Footer from "../Footer/Footer";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

const Article2 = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const readNext = () => {
    navigate("/Article3");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="appContainer">
          <StyledWhatIfSection>
            <h1> WHAT IF you can control who has your mobile number? </h1>
            <p>
              The phone numbers we use for quick logins to accounts and 2FA
              verification can be easily used for purposes other than what was
              promised by companies. Additionally, our mobile numbers can be
              used to improve our experience while using different social media
              applications, but it could also lead to many privacy issues when
              it causes you to share more than you're willing to.
            </p>
            <p>
              2 factor authentication (2FA) using our phone numbers might seem
              really convenient but did you know that in 2018, Facebook was
              revealed to be using these numbers to serve you targeted
              advertisements? Social Media companies can also use the
              information collected to serve you content or profiles curated
              just for you, isn't that great? Tik Tok gives users the ability to
              allow the application to access the users' phone books, using
              common phone numbers to suggest content to users. While it seems
              useful on the surface, this has led to situations like LGBTQ+
              people who post content about being queer getting outed to family
              members who weren't supposed to know. Or the “West Elm Caleb''
              situation, where girls who went on dates with Caleb ended up
              watching and commenting on videos of girls accusing Caleb of being
              an abuser, which quickly turned the situation into a witch hunt
              leading to Caleb being doxxed and harassed, by random TikTok users
              and even brand accounts!
            </p>
            <p>
              What can you do now: Limit the applications that have access to
              your phone number! Turn off sync contacts in the settings of your
              social media applications. Try to use authenticator applications
              like Aegis or Google Authenticator instead of text 2FA when
              possible.
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

export default Article2;
