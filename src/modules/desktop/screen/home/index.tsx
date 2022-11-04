import React, { useCallback, useState } from "react";

import backgroundDesktopImage from "../../../../shared/assets/background-desktop.jpg";

import {
  Container,
  Taskbar,
  ButtonHideTaskbar,
  ContainerUnhideTaskbar,
} from "./styles";

const Home: React.FC = () => {
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
    <Container src={backgroundDesktopImage}>
      {!isHideTaskbar && (
        <Taskbar isHide={isHideTaskbarAnimation}>
          <ButtonHideTaskbar onClick={handleHideTaskbar} />
        </Taskbar>
      )}

      {isHideTaskbar && (
        <ContainerUnhideTaskbar onMouseEnter={handleHideTaskbar} />
      )}
    </Container>
  );
};

export default Home;
