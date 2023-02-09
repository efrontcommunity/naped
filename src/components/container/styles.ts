import styled from 'styled-components';

export const ContainerMaxWidth = styled.div`
  max-width: ${({ theme }) => theme.devices.containerXL};
  margin: 0 auto;
  padding: 0px 24px;
`;
