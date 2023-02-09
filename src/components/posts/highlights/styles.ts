import styled from 'styled-components';
import { device } from '../../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(19, 19, 19, 0.9);

  article {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: relative;
  }

  &:nth-child(1) {
    grid-row: 1 / 3;
  }

  h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 24px;
    line-height: 140%;
    font-weight: 400;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(6, 9, 15, 0.4) 53.65%,
      #06090f 100%
    );
  }

  .highlights-texts {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 25px;
  }

  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 6px 16px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media ${device.containerL} {
    margin: 32px 0px;

    article {
      height: 400px;
    }
  }
`;
