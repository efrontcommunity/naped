import styled from 'styled-components';
import { device } from '../styles/theme';

export const ContainerError = styled.section`
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90vh;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px 0px;

      @media ${device.containerL} {
        flex-direction: column;
        align-items: flex-start;
      }

      span {
        h2 {
          font-size: 4.8rem;
          color: ${({ theme }) => theme.colors.white};
          font-weight: 400;
          max-width: 500px;
        }

        p {
          max-width: 500px;
          margin: 40px 0px;
          font-size: 2rem;
          line-height: 160%;
        }

        button {
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          padding: 12px 32px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.8rem;

          &:hover {
            background: ${({ theme }) => theme.colors.primaryHover};
          }
        }
      }

      div {
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;

        @media ${device.containerL} {
         display: none;
        }

        img {
          width: 80%;
          margin-bottom: 56px;
        }

        h3 {
          font-size: 2.4rem;
          line-height: 150%;
          text-align: center;
          font-weight: 400;
        }
      }
    }
  }
`;
