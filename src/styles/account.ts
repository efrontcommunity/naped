import styled from 'styled-components';

export const ContainerAccount = styled.section`
  padding: 0px 24px;

  div {
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
    max-width: 400px;
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 32px;
  }

  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 56px;
  }

  input {
    width: 100%;
    height: 55px;
    margin-bottom: 24px;
    background: ${({ theme }) => theme.colors.backgroundNormal};
    border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    border-radius: 4px;
    font-size: 1.6rem;
    padding-left: 24px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    margin-top: 24px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px 32px;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    font-size: 1.8rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  .cta-link {
    margin-top: 48px;
    font-size: 2rem;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
