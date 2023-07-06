import { FC } from 'react';

import { lodash } from '@lib/lodash';
import styled, { CSSProp } from '@lib/styled-components';

type ImageProps = {
  src: string;
  width?: number | string;
  height?: number | string | undefined;
  aspectRatio?: number;
  customStyle?: CSSProp;
};

const ImageBlock = styled.div<{
  width?: number | string;
  height?: number | string | undefined;
  customStyle?: CSSProp;
}>`
  width: ${({ width }) => (lodash.isString(width) ? width : `${width || 0}px`)};
  height: ${({ height }) =>
    !height || lodash.isString(height) ? height : `${height || 0}px`};
  ${props => props.customStyle};
`;

const ImageContent = styled.div<{
  src: string;
  width?: number | string;
  height?: number | string | undefined;
  aspectRatio?: number;
  customStyle?: CSSProp;
}>`
  width: 100%;
  height: ${({ height }) =>
    !height || lodash.isString(height) ? height : `${height || 0}px`};
  aspect-ratio: ${props => props.aspectRatio};
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  ${props => props.customStyle};
`;

/**
  Image
 @example
 <Image src width height aspectRatio/>
 @param {Icon} props
 @property {string} props.src
 @property {number | string} props.width
 @property {number | string | undefined} props.height
 @property {number} props.aspectRatio
 @property {CSSProp} props.customStyle
 @returns {React.FC} Image
 */
const Image: FC<ImageProps> = function Image(props) {
  const {
    src,
    width = 0,
    height = undefined,
    aspectRatio = undefined,
    customStyle = {},
  } = props;

  return (
    <ImageBlock width={width} height={height} customStyle={customStyle}>
      <ImageContent
        data-testid="image"
        src={src}
        width={width}
        height={height}
        aspectRatio={aspectRatio}
        customStyle={customStyle}
      />
    </ImageBlock>
  );
};

export default Image;
