import { FC, ReactNode, useState, useCallback } from 'react';

import InputTextItem, { Range } from './InputTextItem';

import { lodash } from '@lib/lodash';
import { CSSProp } from '@lib/styled-components';

type InputEvent = Event & {
  target: { value?: number | string };
};

type InputTextProps = {
  value?: string;
  type?: string;
  width?: number;
  height?: number;
  isArea?: boolean;
  isError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  placeholderStyle?: CSSProp;
  maxLength?: number;
  range?: Range;
  rightComponent?: ReactNode;
  customStyle?: CSSProp;
  focusedStyle?: CSSProp;
  disabledStyle?: CSSProp;
  errorStyle?: CSSProp;
  onValueChange?: (value: string) => void;
  onClick?: (e: any) => void;
};

/**
 InputText
 @example
 <InputText value/>
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
 @property {(value: string) => void} props.onValueChange
 @property {(e: any) => void} props.onClick
 @returns {React.FC} InputText
 */
const InputText: FC<InputTextProps> = function InputText(props) {
  const {
    value = '',
    type = 'text',
    width = '100%',
    height = '100%',
    isArea = false,
    isError = false,
    disabled = false,
    placeholder = '',
    maxLength,
    range,
    customStyle,
    placeholderStyle,
    focusedStyle,
    disabledStyle,
    errorStyle,
    rightComponent = null,
    onValueChange = () => {},
    onClick = () => {},
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChange = useCallback(
    (e: InputEvent) => {
      onValueChange?.(e.target.value?.toString() || '');
    },
    [onValueChange],
  );

  const handleInput = useCallback(
    (e: InputEvent) => {
      const { value: targetValue } = e.target;
      if (!targetValue) return;
      if (
        !!maxLength &&
        lodash.isString(targetValue) &&
        targetValue?.length > maxLength
      ) {
        e.target.value = '';
      }
      if (range?.min && targetValue < range.min) {
        e.target.value = '';
      }
      if (range?.max && targetValue > range.max) {
        e.target.value = '';
      }
    },
    [maxLength, range?.min, range?.max],
  );

  return (
    <InputTextItem
      value={value}
      type={type}
      width={width}
      height={height}
      isArea={isArea}
      isFocused={isFocused}
      isError={isError}
      disabled={disabled}
      placeholder={placeholder}
      maxLength={maxLength}
      range={range}
      rightComponent={rightComponent}
      customStyle={customStyle}
      placeholderStyle={placeholderStyle}
      focusedStyle={focusedStyle}
      disabledStyle={disabledStyle}
      errorStyle={errorStyle}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      handleChange={handleChange}
      handleInput={handleInput}
    />
  );
};

export default InputText;
