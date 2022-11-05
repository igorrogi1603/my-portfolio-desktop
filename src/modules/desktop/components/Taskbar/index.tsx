import React, { useCallback, useState, ReactNode } from "react";

import {
  Container,
  ButtonHideTaskbar,
  ContainerUnhideTaskbar,
  ContainerApps,
} from "./styles";

interface ITaskbarProps {
  children: ReactNode;
}

const Taskbar: React.FC<ITaskbarProps> = ({ children }) => {
  const [isHideTaskbar, setIsHideTaskbar] = useState(false);
  const [isHideTaskbarAnimation, setIsHideTaskbarAnimation] = useState(false);

  const handleHideTaskbar = useCallback(() => {
    if (isHideTaskbar) {
      setIsHideTaskbar(!isHideTaskbar);

      setIsHideTaskbarAnimation(!isHideTaskbarAnimation);
    } else {
      setIsHideTaskbarAnimation(!isHideTaskbarAnimation);

      setTimeout(() => {
        setIsHideTaskbar(!isHideTaskbar);
      }, 1000);
    }
  }, [isHideTaskbar, isHideTaskbarAnimation]);

  return (
    <>
      {!isHideTaskbar && (
        <Container isHide={isHideTaskbarAnimation}>
          <ButtonHideTaskbar onClick={handleHideTaskbar} />

          <ContainerApps>{children}</ContainerApps>
        </Container>
      )}

      {isHideTaskbar && (
        <ContainerUnhideTaskbar onMouseEnter={handleHideTaskbar} />
      )}
    </>
  );
};

export default Taskbar;
