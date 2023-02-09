import styled from 'styled-components';
import { device } from '../../styles/theme';

export const ContainerFooter = styled.div`
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.spacing.gap3} 0px;
  background-color: ${({ theme }) => theme.colors.backgroundNormal};

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.gap1};

    p {
      font-size: 1.8rem;

      a {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
        padding: 0px ${({ theme }) => theme.spacing.gap1};
      }
    }

    img {
      width: 32px;
    }
  }

  @media ${device.containerL} {
    section {
      text-align: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spacing.gap3};

      div {
        display: none;
      }
    }
  }
`;
