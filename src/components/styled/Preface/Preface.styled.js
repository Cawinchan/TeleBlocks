import styled from "styled-components";

export const StyledPreface = styled.section`
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({ theme }) => theme.color.themeColorB};

  h1 {
    // font-size: clamp(1.5rem 30vw 2rem);
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
  }

  a {
    padding: 0;
    margin: 0;
    color: #b41c7c;
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
    border: 2px solid #b41c7c;
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

  & article {
    padding: 0em 10%;
    display: grid;
    justify-content: space-between;
    align-items: left;
    gap: 2rem;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    // box-shadow: 0 0 3px ${({ theme }) => theme.color.grayishBlue};
    // border-radius: 0.4rem;
  }
  & article p {
    color: ${({ theme }) => theme.color.themeColorD};
    padding-bottom: 20px;
    padding-left: 5%;
    text-align: center;
    text-justify: inter-word;
    font-size: clamp(0.75rem 30vw 1.2rem);
  }

  & article h2 {
    color: ${({ theme }) => theme.color.themeColorE};
    font-size: 1.6rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    // font-size: clamp(0.75rem 30vw 1.2rem);
  }
  & article b {
    font-size: 1.8rem;
    font-weight: 900;
    margin-right: 0.5rem;
  }

  // & .cta {
  //   padding: 2rem 4% 3rem;
  //   /* border: 1px solid ${({ theme }) => theme.color.veryDarkCyan}; */
  //   box-shadow: 0 -0px 4px -1px ${({ theme }) => theme.color.grayishBlue};
  //   display: grid;
  //   align-items: center;
  //   justify-items: center;
  //   text-align: center;
  //   max-width: 35rem;
  //   margin: auto;
  //   position: relative;
  //   bottom: -7em;

  //   border-radius: 8px;
  //   background-color: ${({ theme }) => theme.color.white};
  // }

  // & .cta h2 {
  //   font-size: 1.2em;
  //   line-height: 1.3em;
  //   margin: 0.5em 0 1.3em;
  // }

  // & .cta button {
  //   box-shadow: 0 1px 4px -0.4px ${({ theme }) => theme.color.grayishBlue};
  // }

  // @media screen and (min-width: 1000px) {
  //   article {
  //     text-align: left;
  //     /* padding-left: 8rem; */
  //     /* justify-content: space-between; */
  //     grid-template-areas: "pic txt";

  //     div {
  //       grid-area: txt;
  //       max-width: 30rem;
  //       margin: 0 0 0 auto;
  //     }
  //     svg {
  //       grid-area: pic;
  //     }
  //   }
  //   article:nth-child(even) {
  //     /* padding-right: 8rem; */
  //     grid-template-areas: "txt pic";

  //     div {
  //       margin: 0 auto 0 0;
  //     }
  //   }
  // }
`;
