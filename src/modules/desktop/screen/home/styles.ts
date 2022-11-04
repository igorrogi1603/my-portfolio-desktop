import styled from "styled-components";

interface IPropsContainer {
  src?: string;
}

interface IPropsTaskbar {
  isHide: boolean;
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

export const Taskbar = styled.div<IPropsTaskbar>`
  width: 80%;
  height: 55px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  margin-top: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
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
