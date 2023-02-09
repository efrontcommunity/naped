import styled from 'styled-components';

export const ContainerPosts = styled.div`
  padding: 88px 0px;

  .presentation-post {
    text-align: center;

    span {
      background: ${({ theme }) => theme.colors.primary};
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      text-transform: uppercase;
      font-size: 1.8rem;
    }

    h2 {
      font-size: 3.2rem;
      font-weight: 400;
      margin: 24px 0px;
    }

    p {
      font-size: 1.8rem;
      line-height: 160%;
    }

    .date-post {
      margin-top: 32px;
      font-size: 2.4rem;
    }
  }

  .banner-post {
    margin: 48px 0px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
  }

  .content-post {
    margin-bottom: 88px;

    p {
      font-size: 1.8rem;
      line-height: 160%;
    }
  }
`;
