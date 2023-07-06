import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styled, { CSSProp } from '@lib/styled-components';

type LinkBoxProps = {
  router: string | { pathname: string; query: any };
  selected?: boolean;
  disabled?: boolean;
  customStyle?: CSSProp;
  selectedStyle?: CSSProp;
  disabledStyle?: CSSProp;
  onClick?: (e: any) => void;
  children: ReactNode;
};

const LinkBoxBlock = styled.div<{ customStyle?: CSSProp }>`
  width: 100%;
  ${props => props.customStyle};
`;

const StyleBlock = styled.div<{
  selected?: boolean;
  disabled?: boolean;
  customStyle?: CSSProp;
  selectedStyle?: CSSProp;
  disabledStyle?: CSSProp;
}>`
  ${props => props.customStyle};
  ${props => props.selected && props.selectedStyle};
  ${props => props.disabled && props.disabledStyle};
`;

/**
 LinkBox

 atom이 children으로 들어가는 구조라서 molecule로 분류
 @example
 <LinkBox router>{children}</LinkBox>
 @param {LinkBox} props
 @property {string|{ pathname: string; query: any }} props.router
 @property {boolean} props.selected
 @property {boolean} props.disabled
 @property {CSSProp} props.customStyle
  @property {CSSProp} props.selectedStyle
 @property {CSSProp} props.disabledStyle
 @property {(e: any) => void} props.onClick
 @returns {React.FC} LinkBox
 */
const LinkBox: FC<LinkBoxProps> = function LinkBox(props) {
  const {
    router,
    selected = false,
    disabled = false,
    customStyle = {},
    selectedStyle = {},
    disabledStyle = {},
    onClick = () => {},
    children,
  } = props;

  return (
    <LinkBoxBlock>
      {!disabled ? (
        <Link data-testid="link" href={router} passHref onClick={onClick}>
          <StyleBlock
            selected={selected}
            customStyle={customStyle}
            selectedStyle={selectedStyle}
          >
            {children}
          </StyleBlock>
        </Link>
      ) : (
        <StyleBlock
          disabled={disabled}
          customStyle={customStyle}
          disabledStyle={disabledStyle}
        >
          {children}
        </StyleBlock>
      )}
    </LinkBoxBlock>
  );
};

export default LinkBox;
