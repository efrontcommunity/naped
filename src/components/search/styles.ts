import styled from 'styled-components';
import { device } from '../../styles/theme';

export const ContainerSearch = styled.div`
  padding: ${({ theme }) => theme.spacing.gap8} 0px;

  .banner-search {
    height: 350px;
    width: 100%;
    position: relative;

    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(6, 9, 15, 0.4) 53.65%,
        #06090f 100%
      );
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    .text-gradient {
      padding: 24px;
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translate(8px, -50%);

      @media ${device.containerL} {
        left: 0px;
        transform: translate(0px, -50%);
      }

      h2 {
        font-size: 4rem;
        font-weight: 400;
        margin-bottom: ${({ theme }) => theme.spacing.gap3};
      }

      p {
        font-size: 2.2rem;
        line-height: 160%;
        color: ${({ theme }) => theme.colors.white};
        max-width: 600px;
      }
    }
  }

  input {
    width: 100%;
    height: 55px;
    margin-top: ${({ theme }) => theme.spacing.gap6};
    background: ${({ theme }) => theme.colors.backgroundNormal};
    border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    border-radius: 4px;
    font-size: 1.6rem;
    padding-left: ${({ theme }) => theme.spacing.gap3};
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.white};
  }

  .container-search {
    padding: 88px 0px;
    display: flex;
    gap: 48px 24px;
    flex-wrap: wrap;

    @media ${device.containerL} {
      flex-direction: column;
    }

    .warning-search {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 400;
    }
  }
`;
