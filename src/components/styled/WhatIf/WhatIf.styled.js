import styled from "styled-components";

export const StyledWhatIfSection = styled.section`
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({ theme }) => theme.color.themeColorD};

  h1 {
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    color: ${({ theme }) => "000000"};
  }

  div {
    display: flex;
    // gap: 5rem;
    justify-content: space-between;
  }

  a {
    padding: 0;
    margin: 0;
    color: #741c7c;
    font-weight: 500;
    -webkit-transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    display: inline-block;
    text-decoration: none;
    position: relative;
  }
  a:hover {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  a::before {
    position: absolute;
    top: -2px;
    left: -7px;
    box-sizing: content-box;
    padding: 0 5px;
    width: 100%;
    height: 100%;
    border: 2px solid #741c7c;
    content: "";
    opacity: 0;
    -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
    transition: opacity 0.2s, transform 0.2s;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  a:hover::before {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  //   & article {
  //     padding: 2.5em 5%;
  //     display: grid;
  //     justify-content: space-between;
  //     align-items: center;
  //     gap: 5rem;
  //     text-align: center;
  //     grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  //     background-color: ${({ theme }) => theme.color.themeColorE};
  //     box-shadow: 0 0 3px ${({ theme }) => theme.color.grayishBlue};
  //     border-radius: 0.4rem;
  //   }

  .aws-btn {
    --button-default-height: 48px;
    --button-default-font-size: 15px;
    --button-default-border-radius: 6px;
    --button-horizontal-padding: 20px;
    --button-raise-level: 7px;
    --button-hover-pressure: 3;
    --transform-speed: 0.225s;
    --button-primary-color: #475472;
    --button-primary-color-dark: #2a3143;
    --button-primary-color-light: #d4d9e4;
    --button-primary-color-hover: #424e6a;
    --button-primary-border: none;
    --button-secondary-color: #a08a85;
    --button-secondary-color-dark: #786764;
    --button-secondary-color-light: #6c6a00;
    --button-secondary-color-hover: #decdca;
    --button-secondary-border: none;
    --button-anchor-color: #f3c8ad;
    --button-anchor-color-dark: #734922;
    --button-anchor-color-light: #4c3016;
    --button-anchor-color-hover: #f1bfa0;
    --button-anchor-border: 1px solid #8c633c;
    margin: 10 auto;
  }
`;
