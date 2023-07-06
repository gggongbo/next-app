import { Book } from '@domain/cores';
import { FC } from 'react';

import { Text } from '@components/atom';
import Image from '@components/atom/Image';
import styled from '@lib/styled-components';

const BookItemBlock = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 6px;
  padding: 5px 20px 20px 20px;
  margin-bottom: 12px;
`;

const BookItemTitleBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;

const TitleBlock = styled.div`
  max-width: 700px;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

const SubTitleBlock = styled.div`
  max-width: 700px;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

type BooksPageItemProps = {
  item?: Book;
};

const BooksPageItem: FC<BooksPageItemProps> = function BooksPageItem(props) {
  const { item } = props;

  if (!item) return null;

  return (
    <BookItemBlock>
      <Image src={item.image} width={100} aspectRatio={1} />
      <BookItemTitleBlock>
        <TitleBlock>
          <Text color="black" size={20} weight="bold" ellipsis>
            {item.title}
          </Text>
        </TitleBlock>
        <SubTitleBlock>
          <Text color="black" size={16} ellipsis>
            {item.subtitle}
          </Text>
        </SubTitleBlock>
      </BookItemTitleBlock>
    </BookItemBlock>
  );
};

export default BooksPageItem;
