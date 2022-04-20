import styled from "styled-components";

export const StyledArticleSection = styled.section`
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({ theme }) => theme.color.themeColorD};

  h1 {
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
  }

  & article {
    padding: 2.5em 5%;
    display: grid;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    background-color: ${({ theme }) => theme.color.themeColorE};
    box-shadow: 0 0 3px ${({ theme }) => theme.color.grayishBlue};
    border-radius: 0.4rem;
  }
  & article h2 {
    color: ${({ theme }) => theme.color.themeColorA};
    font-size: 1.6rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  & article p {
    color: ${({ theme }) => theme.color.themeColorB};
    padding-bottom: 20px;
    padding-left: 5%;
    font-size: clamp(0.75rem 30vw 1.2rem);
  }
  & article b {
    font-size: 1.8rem;
    font-weight: 900;
    margin-right: 0.5rem;
  }

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
    --button-secondary-color: ${({ theme }) => theme.color.themeColorD};
    --button-secondary-color-dark: ${({ theme }) => theme.color.themeColorE};
    --button-secondary-color-light: #6c6a00;
    --button-secondary-color-hover: ${({ theme }) => theme.color.themeColorD2};
    --button-secondary-border: none;
    --button-anchor-color: #f3c8ad;
    --button-anchor-color-dark: #734922;
    --button-anchor-color-light: #4c3016;
    --button-anchor-color-hover: #f1bfa0;
    --button-anchor-border: 1px solid #8c633c;
  }

  & .cta {
    padding: 2rem 4% 3rem;
    /* border: 1px solid ${({ theme }) => theme.color.veryDarkCyan}; */
    box-shadow: 0 -0px 4px -1px ${({ theme }) => theme.color.grayishBlue};
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    max-width: 35rem;
    margin: auto;
    position: relative;
    bottom: -7em;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.white};
  }

  & .cta h2 {
    font-size: 1.2em;
    line-height: 1.3em;
    margin: 0.5em 0 1.3em;
  }

  & .cta button {
    box-shadow: 0 1px 4px -0.4px ${({ theme }) => theme.color.grayishBlue};
  }

  @media screen and (min-width: 1000px) {
    article {
      text-align: left;
      /* padding-left: 8rem; */
      /* justify-content: space-between; */
      grid-template-areas: "pic txt";

      div {
        grid-area: txt;
        max-width: 30rem;
        margin: 0 0 0 auto;
      }
      svg {
        grid-area: pic;
      }
    }
    article:nth-child(even) {
      /* padding-right: 8rem; */
      grid-template-areas: "txt pic";

      div {
        margin: 0 auto 0 0;
      }
    }
  }
`;
