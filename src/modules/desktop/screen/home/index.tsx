import React from "react";

import Taskbar from "../../components/Taskbar";
import AppsTaskbar from "../../components/AppsTaskbar";

import backgroundDesktopImage from "../../../../shared/assets/background-desktop.jpg";
import iconVacinometro from "../../../../shared/assets/icon-vacinometro.png";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container src={backgroundDesktopImage}>
      <Taskbar>
        <AppsTaskbar
          onclick={() => {}}
          backgroundColor="#b40000"
          src={iconVacinometro}
          widthImage="30"
          heightImage="30"
        />

        <AppsTaskbar
          onclick={() => {}}
          backgroundColor="#fff"
          src={backgroundDesktopImage}
          widthImage="30"
          heightImage="30"
        />
      </Taskbar>
    </Container>
  );
};

export default Home;
