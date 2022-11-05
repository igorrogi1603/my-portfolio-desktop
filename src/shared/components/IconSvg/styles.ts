import styled from "styled-components";

interface ImageSvgProps {
  width?: string;
  height?: string;
  image?: string;
}

export const ImageSvg = styled.img<ImageSvgProps>`
  width: ${({ width }) => (width ? width : "253px")};
  height: ${({ height }) => (height ? height : "52px")};
`;
