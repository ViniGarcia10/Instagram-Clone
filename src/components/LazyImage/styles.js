import styled from 'styled-components/native';

export const Small = styled.ImageBackground`
  width: 100%;
  aspect-Ratio: ${props => props.ratio};
`;

export const Original = styled.Image`
  width: 100%;
  aspect-Ratio: ${props => props.ratio};
`;
