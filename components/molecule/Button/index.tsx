import { FC, ReactNode } from 'react';

import styled, { CSSProp } from '@lib/styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  customStyle?: CSSProp;
  disabledStyle?: CSSProp;
  onClick: (e: any) => void;
  children: ReactNode;
};

const ButtonBlock = styled.button<ButtonProps>`
  ${props => props.customStyle};
  ${props => props.disabled && props.disabledStyle};
`;

/**
 Button

 atom이 children으로 들어가는 구조라서 molecule로 분류
 @example
 <Button type disabled onClick>{children}</Button>
 @param {Button} props
 @property {'button' | 'submit' | 'reset' | undefined} props.type
 @property {boolean} props.disabled
 @property {(e: any) => void} props.onClick
 @property {CSSProp} props.customStyle
 @property {CSSProp} props.disabledStyle
 @returns {React.FC} Button
 */
const Button: FC<ButtonProps> = function Button(props) {
  const {
    type = 'button',
    disabled = false,
    customStyle = {},
    disabledStyle = {},
    onClick = () => {},
    children,
  } = props;

  return (
    <ButtonBlock
      data-testid="button"
      type={type}
      disabled={disabled}
      customStyle={customStyle}
      disabledStyle={disabledStyle}
      onClick={onClick}
    >
      {children}
    </ButtonBlock>
  );
};

export default Button;
