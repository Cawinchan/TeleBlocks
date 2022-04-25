import React from "react";
import { StyledWhatIfSection } from "./WhatIf.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Global.styled";
import theme from "../../../theme";
import Footer from "../Footer/Footer";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

const Article1 = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const readNext = () => {
    navigate("/Article2");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="appContainer">
          <StyledWhatIfSection>
            <h1>
              WHAT IF you can control who gets access to your information
              through your mobile number?
            </h1>
            <p>
              Your mobile number can be used to get personal information about
              you easily through the use of people look-up sites. This
              information can then allow anyone to attack you with targeted ads
              or even hack into your online accounts!
            </p>
            <p>
              Everyone (hopefully) already knows that all your online activity
              is easily tracked through the use of trackers on all kinds of
              websites. However, did you know that your mobile number can be
              also used to find out about all kinds of personal information?
              According to mobile security firm Fyde, our mobile number might be
              a stronger identifier than our full name. For the low barrier of
              $5 and 1 hour, malicious hackers can easily find your current home
              addresses, all your past addresses, full names of your family,
              past phone numbers and even your criminal record through the use
              of people look-up applications. This information can be easily
              used to reset your passwords and target your number with phishing
              texts and robocalls. Even more legitimate companies like marketers
              can use your mobile number to send you targeted ads! Additionally,
              hackers can use the personal information to trick your telco to
              port your number onto a new number, giving the hacker access to
              your whole life, allowing them to log into your private accounts
              and to impersonate you for the purpose of scamming your friends
              and family!
            </p>
            <p>
              What you can do now: Search up yourself on any of the people
              look-up websites, then request for the sites to remove your
              information! You can follow Norton's guide on how to send a
              removal request for different look-up sites{" "}
              <a
                href="https://us.norton.com/internetsecurity-how-to-how-to-remove-info-from-people-search-sites.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
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

export default Article1;
