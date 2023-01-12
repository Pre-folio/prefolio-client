import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedTagsListState } from '../../../store/TagState';
import { theme } from '../../../styles/theme';
import { Filter } from '../Filter';
import { Column, Row } from '../Wrapper';

export function TagArea() {
  const [selectedTagsList, setSelectedTagsList] = useRecoilState(selectedTagsListState);

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tagName = e.currentTarget.name;

    if (selectedTagsList.includes(tagName)) {
      setSelectedTagsList(
        selectedTagsList.filter((tags) => {
          return tags !== tagName;
        })
      );
    } else setSelectedTagsList([...selectedTagsList, tagName]);
  };

  const isClicked = (type: any) => {
    if (selectedTagsList.includes(type)) {
      return true;
    }
    return false;
  };

  return (
    <Wrapper>
      <Column gap="18px" alignItems="flex-start">
        <Row gap="12px">
          <CategoryTextArea>분야별</CategoryTextArea>
          <Filter onClick={onClickButton} isClicked={isClicked('plan')} type="plan" />
          <Filter onClick={onClickButton} isClicked={isClicked('dev')} type="dev" />
          <Filter onClick={onClickButton} isClicked={isClicked('design')} type="design" />
        </Row>
        <Row gap="12px">
          <CategoryTextArea>활동별</CategoryTextArea>
          <Filter onClick={onClickButton} isClicked={isClicked('society')} type="society" />
          <Filter onClick={onClickButton} isClicked={isClicked('intern')} type="intern" />
          <Filter onClick={onClickButton} isClicked={isClicked('project')} type="project" />
        </Row>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  padding: 24px 30px;
  background-color: ${theme.palette.Gray10};
  border: 8px;
  border-radius: 8px;
`;

const CategoryTextArea = styled.span`
  margin-right: 20px;
  ${theme.typo.Body1}
  color: ${theme.palette.Gray40};
`;
