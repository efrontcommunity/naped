import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Container = styled.div`
  border-bottom: 1px solid #151b26;

  section {
    width: 100%;
    height: 10vh;
    padding: ${({ theme }) => theme.spacing.gap3} 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .container-mobile {
      display: none;

      nav {
        display: none;
      }
    }

    .bg-salmon {
      overflow-y: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.backgroundDark};
      width: 100%;
      height: 100%;
      z-index: 999;

      nav {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: ${({ theme }) => theme.spacing.gap6};

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

          li {
            .close-menu {
              cursor: pointer;
              position: absolute;
              right: 32px;
              top: 32px;
              width: 32px;
              height: 32px;

              div {
                width: 100%;
                height: 2px;
                background-color: ${({ theme }) => theme.colors.white};
              }

              div:nth-child(1) {
                transform: rotate(45deg) translate(8px, 7px);
              }

              div:nth-child(2) {
                transform: rotate(-45deg) translate(-7px, 5px);
              }
            }
            h2 {
              cursor: pointer;
              position: absolute;
              right: 24px;
              top: 24px;
              font-size: 2.4rem;
            }
            a {
              font-size: 2.4rem;
              color: ${({ theme }) => theme.colors.white};

              &:hover {
                background: linear-gradient(
                  223.75deg,
                  #00a3ff 4.8%,
                  #0054c6 95.02%
                );
                background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
              }
            }
          }
        }
      }
    }

    img {
      width: 100%;
    }

    article {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.gap8};

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: ${({ theme }) => theme.spacing.gap6};

          li {
            a {
              font-size: 1.8rem;
              color: ${({ theme }) => theme.colors.white};

              &:hover {
                background: linear-gradient(
                  223.75deg,
                  #00a3ff 4.8%,
                  #0054c6 95.02%
                );
                background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
              }
            }
          }
        }
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
  }

  @media ${device.containerL} {
    section {
      .container-mobile {
        display: flex;
        flex-direction: column;

        .open-mobile {
          cursor: pointer;
          padding: 8px;
          width: 56px;
          height: 56px;
          border-radius: 32px;
          background-color: ${({ theme }) => theme.colors.backgroundNormal};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        div {
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.white};
        }
      }

      img {
        width: 80%;
      }

      article {
        display: none;
      }
    }
  }
`;
