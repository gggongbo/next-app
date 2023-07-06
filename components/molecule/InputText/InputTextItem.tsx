import { FC, ReactNode } from 'react';

import { lodash } from '@lib/lodash';
import styled, { CSSProp, css } from '@lib/styled-components';

const InputTextBlock = styled.div<{
  width: number | string;
  height: number | string;
  isFocused: boolean;
  isError: boolean;
  disabled?: boolean;
  customStyle?: CSSProp;
  focusedStyle?: CSSProp;
  disabledStyle?: CSSProp;
  errorStyle?: CSSProp;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => (lodash.isString(width) ? width : `${width || 0}px`)};
  height: ${({ height }) =>
    lodash.isString(height) ? height : `${height || 0}px`};
  padding: 3px 2px 3px 0px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.text[600]};

  ${props => props.customStyle};
  ${({ isFocused, focusedStyle }) => isFocused && focusedStyle};
  ${({ isError, errorStyle }) => isError && errorStyle};
  ${({ disabled, disabledStyle }) => disabled && disabledStyle};
`;

const inputPlaceholderStyle = css<{
  placeholderStyle?: CSSProp;
  disabled?: boolean;
  disabledStyle?: CSSProp;
}>`
  ::-webkit-input-placeholder {
    ${props => props.placeholderStyle};
    ${({ disabled, disabledStyle }) => disabled && disabledStyle};
  }

  ::-moz-placeholder {
    ${props => props.placeholderStyle};
    ${({ disabled, disabledStyle }) => disabled && disabledStyle};
  }

  :-ms-input-placeholder {
    ${props => props.placeholderStyle};
    ${({ disabled, disabledStyle }) => disabled && disabledStyle};
  }

  :-moz-placeholder {
    ${props => props.placeholderStyle};
    ${({ disabled, disabledStyle }) => disabled && disabledStyle};
  }

  ::placeholder {
    ${props => props.placeholderStyle};
    ${({ disabled, disabledStyle }) => disabled && disabledStyle};
  }
`;

const InputTextAreaBlock = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 4px;
  padding-left: 16px;
`;

const InputTextArea = styled.textarea<{
  customStyle?: CSSProp;
  placeholderStyle?: CSSProp;
  disabled?: boolean;
  disabledStyle?: CSSProp;
}>`
  width: 100%;
  height: 100%;
  resize: none;
  border: 0px;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  ${props => props.customStyle};
  ${inputPlaceholderStyle};
  ${({ disabled, disabledStyle }) => disabled && disabledStyle};
`;

const InputTextField = styled.input<{
  customStyle?: CSSProp;
  placeholderStyle?: CSSProp;
  disabled?: boolean;
  disabledStyle?: CSSProp;
}>`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  margin-right: 4px;
  margin-left: 16px;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  ${props => props.customStyle};
  ${inputPlaceholderStyle};
  ${({ disabled, disabledStyle }) => disabled && disabledStyle};
`;

export type Range = {
  max?: number | string;
  min?: number | string;
};

type InputTextItemProps = {
  value: string;
  type: string;
  width: number | string;
  height: number | string;
  isArea: boolean;
  isFocused: boolean;
  isError: boolean;
  disabled: boolean;
  placeholder: string;
  placeholderStyle?: CSSProp;
  maxLength?: number;
  range?: Range;
  rightComponent?: ReactNode;
  customStyle?: CSSProp;
  focusedStyle?: CSSProp;
  disabledStyle?: CSSProp;
  errorStyle?: CSSProp;
  onClick?: (e: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  handleChange?: (e: any) => void;
  handleInput?: (e: any, range?: Range) => void;
};

/**
 InputTextItem
 @example
 <InputTextItem value={value} />
 @param {InputTextItem} props
 @property {string} props.value
 @property {string} props.type
 @property {number | string} props.width
 @property {number | string} props.height
 @property {boolean} props.isArea
 @property {boolean} props.isFocused
 @property {boolean} props.isError
 @property {boolean} props.disabled
 @property {string} props.placeholder
 @property {CSSProp} props.placeholderStyle
 @property {string} props.maxLength
 @property { max?: number | string; min?: number | string;} props.range
 @property {ReactNode} props.rightComponent
 @property {CSSProp} props.customStyle
 @property {CSSProp} props.focusedStyle
 @property {CSSProp} props.disabledStyle
 @property {CSSProp} props.errorStyle
 @property {(e: any) => void} props.onClick
 @property {() => void} props.onFocus
 @property {() => void} props.onBlur
 @property {(e: any) => void} props.handleChange
 @property {(e: any) => void} props.handleInput
 @returns {React.FC} InputTextItem
 */
const InputTextItem: FC<InputTextItemProps> = function InputTextItem(props) {
  const {
    value,
    type,
    width,
    height,
    isArea,
    isFocused,
    isError,
    disabled,
    placeholder,
    maxLength,
    range,
    rightComponent,
    customStyle,
    placeholderStyle,
    focusedStyle,
    disabledStyle,
    errorStyle,
    onClick,
    onFocus,
    onBlur,
    handleChange,
    handleInput,
  } = props;

  return (
    <InputTextBlock
      width={width}
      height={height}
      isFocused={isFocused}
      isError={isError}
      disabled={disabled}
      customStyle={customStyle}
      focusedStyle={focusedStyle}
      disabledStyle={disabledStyle}
      errorStyle={errorStyle}
    >
      {isArea ? (
        <InputTextAreaBlock>
          <InputTextArea
            data-testid="textarea"
            value={value}
            placeholder={placeholder}
            placeholderStyle={placeholderStyle}
            maxLength={maxLength}
            disabled={disabled}
            disabledStyle={disabledStyle}
            customStyle={customStyle}
            onClick={onClick}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </InputTextAreaBlock>
      ) : (
        <InputTextField
          data-testid="inputtext"
          value={value}
          type={type}
          placeholder={placeholder}
          placeholderStyle={placeholderStyle}
          maxLength={maxLength}
          max={range?.max}
          min={range?.min}
          disabled={disabled}
          disabledStyle={disabledStyle}
          customStyle={customStyle}
          onClick={onClick}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={handleInput}
        />
      )}
      {!!rightComponent && rightComponent}
    </InputTextBlock>
  );
};

export default InputTextItem;
