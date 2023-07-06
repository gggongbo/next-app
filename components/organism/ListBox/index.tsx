import { FC, ReactNode, useMemo } from 'react';

import styled, { CSSProp } from '@lib/styled-components';

type ListBoxProps = {
  data: any[];
  refreshing?: boolean;
  renderItem: (e: any) => ReactNode;
  listEmptyComponent?: ReactNode;
  customStyle?: CSSProp;
};

const ListBoxBlock = styled.div<{ customStyle?: CSSProp }>`
  width: 100%;
  ${props => props.customStyle};
`;

const ListItemBlock = styled.div<{ customStyle?: CSSProp }>`
  display: inline-flex;
  ${props => props.customStyle};
`;

/**
 ListBox
 @example
 <ListBox data renderItem/>
 @component
 @param {ListBox} props
 @property {any[]} props.data
 @property {boolean} props.refreshing
 @property {(e: any) => ReactNode} props.renderItem
 @property {ReactNode} props.listEmptyComponent
 @property {CSSProp} props.customStyle
 @returns {React.FC} ListBox
 */
const ListBox: FC<ListBoxProps> = function ListBox(props) {
  const {
    data,
    refreshing = false,
    renderItem,
    listEmptyComponent = null,
    customStyle = {},
  } = props;

  const dataComponent = useMemo(() => {
    if (!data) return null;
    return data.map((item, index) => (
      <ListItemBlock
        // eslint-disable-next-line react/no-array-index-key
        key={`${index}${item}`}
        customStyle={customStyle}
        data-testid={`listitem-${index}`}
      >
        {renderItem({ item, index })}
      </ListItemBlock>
    ));
  }, [customStyle, data, renderItem]);

  if (refreshing) return null;
  return (
    <ListBoxBlock customStyle={customStyle}>
      {data?.length > 0 ? dataComponent : listEmptyComponent}
    </ListBoxBlock>
  );
};

export default ListBox;
