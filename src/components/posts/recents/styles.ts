import styled from 'styled-components';
import { device } from '../../../styles/theme';

export const ContainerRecent = styled.div`
  width: calc(33% - 16px);
  height: auto;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  flex-direction: column;

  img {
    height: 250px;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    height: auto;
    gap: 24px;

    span {
      background: ${({ theme }) => theme.colors.primary};
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      font-size: 1.8rem;
      text-transform: uppercase;
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 140%;
    }

    p {
      font-size: 1.6rem;
      line-height: 160%;
    }

    a {
      margin-top: ${({ theme }) => theme.spacing.gap3};
      font-size: 2rem;
      background: ${({ theme }) => theme.colors.primary};
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }

  @media ${device.containerL} {
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
`;
