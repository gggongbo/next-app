import { FC, ReactNode } from 'react';

import styled, { CSSProp, css } from '@lib/styled-components';

type TextProps = {
  size?: number;
  weight?: string | number;
  lineHeight?: number;
  color?: string;
  ellipsis?: boolean;
  customStyle?: CSSProp;
  children: ReactNode;
};

const ellipsisText = css`
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const TextBlock = styled.div<TextProps>`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  ${props => props.ellipsis && ellipsisText};
  ${props => props.customStyle};
`;

/**
  Text
 @example
 <Text size weight lineHeight color ellipsis>text</Text>
 @param {Text} props
 @property {string} props.size
 @property {number | string} props.weight
 @property {number} props.lineHeight
 @property {string} props.color
 @property {boolean} props.ellipsis
 @property {CSSProp} props.customStyle
 @returns {React.FC} Text
 */
const Text: FC<TextProps> = function Text(props) {
  const {
    size = 16,
    weight = 'normal',
    lineHeight = undefined,
    color = undefined,
    ellipsis = false,
    customStyle = {},
    children,
  } = props;

  return (
    <TextBlock
      data-testid="text"
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      color={color}
      ellipsis={ellipsis}
      customStyle={customStyle}
    >
      {children}
    </TextBlock>
  );
};

export default Text;
