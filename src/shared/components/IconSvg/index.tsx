import React from "react";
import { ImageSvg } from "./styles";

interface IconSvgProps {
  image: string;
  width?: string;
  height?: string;
  onClick?: any;
}

const IconSvg: React.FC<IconSvgProps> = ({ image, width, height, onClick }) => {
  return (
    <ImageSvg width={width} height={height} src={image} onClick={onClick} />
  );
};

export default IconSvg;
