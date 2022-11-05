import styled from "styled-components";

interface IPropsContainer {
  isHide: boolean;
}

export const Container = styled.div<IPropsContainer>`
  width: 80%;
  height: 55px;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  margin-top: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${({ isHide }) => (!isHide ? "up-dow" : "down-up")} 1s;

  @keyframes up-down {
    from {
      transform: translateY(70px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes down-up {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(70px);
    }
  }
`;

export const ButtonHideTaskbar = styled.div`
  width: 10%;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  border-radius: 10px;
  margin-top: -2px;
`;

export const ContainerUnhideTaskbar = styled.div`
  width: 100%;
  height: 20px;
  background: transparent;
  margin-top: auto;
`;

export const ContainerApps = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
