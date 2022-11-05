import styled from "styled-components";

interface IPropsContainer {
  backgroundColor: string;
}

export const Container = styled.div<IPropsContainer>`
  width: 40px;
  height: 40px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;
`;
