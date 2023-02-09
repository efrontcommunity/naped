import { createGlobalStyle } from 'styled-components';
import { device } from '../styles/theme';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.texts.main};
  }

  img,
  svg {
    max-width: 100%;
    display: block;
  }

  p, span {
    font-family: ${({ theme }) => theme.texts.secondary};
    color: ${({ theme }) => theme.colors.gray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: ${({ theme }) => theme.texts.main};
  }

  button,
  input {
    font-family: ${({ theme }) => theme.texts.main};
    border: 0;
    
    &:focus {
      border: 0;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundDark};
    color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

    .overflow-body {
      overflow: hidden;
    }

  main section {
    padding: ${({ theme }) => theme.spacing.gap6} 0px;
  }

  .presentation {
    text-align: center;
    margin-top: 56px;

    h1 {
      font-size: 4.8rem;
      font-weight: 400;
      margin-bottom: ${({ theme }) => theme.spacing.gap4};
    }

    p {
      font-size: 2.4rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 160%;
    }
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.gap3};
    margin: 0 auto;

    @media ${device.containerL} {
      display: inherit;
    }
  }

  .recent .recent-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;

    @media ${device.containerL} {
      flex-direction: column;
    }
  }

  .recent > h2 {
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing.gap5};
  }

  .release .release-container{
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.gap6};

    @media ${device.containerL} {
      flex-direction: column;
    }
  }

  .release > h2 {
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing.gap5};
  }
`;
