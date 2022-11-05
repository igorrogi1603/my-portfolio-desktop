import styled from "styled-components";

interface IPropsContainer {
  src?: string;
}

export const Container = styled.div<IPropsContainer>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${({ src }) => src && src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
