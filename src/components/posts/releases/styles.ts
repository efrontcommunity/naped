import styled from 'styled-components';
import { device } from '../../../styles/theme';

export const ContainerRelease = styled.article`
  width: 50%;
  margin-top: 32px;

  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 6px 16px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 500;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 400;
    margin: 24px 0px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1.8rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.gray};
  }

  div {
    margin: 32px 0px;
  }

  a {
    background: ${({ theme }) => theme.colors.primary};
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 2rem;
  }

  @media ${device.containerL} {
    width: 100%;
  }
`;
