import React from "react";

import IconSvg from "../../../../shared/components/IconSvg";

import { Container } from "./styles";

interface ITaskbarProps {
  onclick: () => void;
  backgroundColor: string;
  src: string;
  widthImage: string;
  heightImage: string;
}

const AppsTaskbar: React.FC<ITaskbarProps> = ({
  onclick,
  backgroundColor,
  src,
  widthImage,
  heightImage,
}) => {
  return (
    <Container onClick={onclick} backgroundColor={backgroundColor}>
      <IconSvg image={src} width={widthImage} height={heightImage} />
    </Container>
  );
};

export default AppsTaskbar;
