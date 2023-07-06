import { FC } from 'react';

import { Text } from '@components/atom';
import { Button, InputText } from '@components/molecule';
import styled, { css, useTheme } from '@lib/styled-components';

const InputBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const inputStyle = css`
  display: flex;
  flex: 1;
  font-size: 20px;
  border-radius: 6px 0px 0px 6px;
  padding: 10px 0px;
  border-color: ${props => props.theme.colors.gray[500]};
`;

const inputPlacehoderStyle = css`
  color: ${props => props.theme.colors.gray[400]};
`;

const registrationButtonStyle = css`
  padding: 10px 50px;
  background-color: ${props => props.theme.colors.orange};
  border-radius: 0px 6px 6px 0px;
  border: 1px solid ${props => props.theme.colors.orange};
  border-left: 0px;
`;

type BooksProps = {
  searchKeyword?: string;
  onInputValueChange: (value: string) => void;
  onSearchButtonClick: () => void;
};

const Books: FC<BooksProps> = function Books(props) {
  const { searchKeyword, onInputValueChange, onSearchButtonClick } = props;

  const theme = useTheme();

  return (
    <InputBlock>
      <InputText
        value={searchKeyword}
        customStyle={inputStyle}
        onValueChange={onInputValueChange}
        placeholder="Book Name"
        placeholderStyle={inputPlacehoderStyle}
      />
      <Button
        customStyle={registrationButtonStyle}
        onClick={onSearchButtonClick}
      >
        <Text size={20} color={theme.colors.white} weight={500}>
          검색
        </Text>
      </Button>
    </InputBlock>
  );
};

export default Books;
