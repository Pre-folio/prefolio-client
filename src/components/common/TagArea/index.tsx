import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  selectedActTagListState,
  selectedPartTagListState,
  selectedTagsListState,
} from '../../../store/TagArea/tagAreaState';
import { theme } from '../../../styles/theme';
import { HelpIcon } from '../../Icons/HelpIcon';
import { Filter } from '../Filter';
import { Column, Row } from '../Wrapper';

interface TagAreaProps {
  width?: string;
}

/**
 *
 * @returns recoil의 selectedTagsListState로 상태관리 가능
 */
export function TagArea({ width }: TagAreaProps) {
  //TODO 페이지별로 아이콘 변경
  const [selectedActTagList, setSelectedActTagList] = useRecoilState(selectedActTagListState);
  const [selectedPartTagList, setSelectedPartTagList] = useRecoilState(selectedPartTagListState);
  // const [selectedTagsList, setSelectedTagsList] = useRecoilState(selectedTagsListState);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const urlPath: string = router.asPath;

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tagName = e.currentTarget.name;
    if (tagName === 'plan' || tagName === 'dev' || tagName === 'design') {
      if (selectedPartTagList.includes(tagName)) {
        setSelectedPartTagList(
          selectedPartTagList.filter((tag: any) => {
            return tag !== tagName;
          })
        );
      } else {
        setSelectedPartTagList([...selectedPartTagList, tagName]);
      }
    } else {
      if (selectedActTagList.includes(tagName)) {
        setSelectedActTagList(
          selectedActTagList.filter((tag: any) => {
            return tag !== tagName;
          })
        );
      } else {
        setSelectedActTagList([...selectedActTagList, tagName]);
      }
    }

    // if (selectedActTagList.includes(tagName)) {
    //   setSelectedActTagList(
    //     selectedActTagList.filter((tags) => {
    //       return tags !== tagName;
    //     })
    //   );
    // } else setSelectedTagsList([...selectedActTagList, tagName]);
  };

  const isClicked = (type: any) => {
    const selectedTagsList = selectedActTagList.concat(selectedPartTagList);
    if (selectedTagsList.includes(type)) {
      return true;
    }
    return false;
  };

  return (
    <Wrapper width={width}>
      <Column gap="18px" alignItems="flex-start">
        <Row width="100%" justifyContent={'space-between'}>
          <Row gap="12px">
            <CategoryTextArea>분야별</CategoryTextArea>
            <Filter onClick={onClickButton} isClicked={isClicked('plan')} type="plan" />
            <Filter onClick={onClickButton} isClicked={isClicked('dev')} type="dev" />
            <Filter onClick={onClickButton} isClicked={isClicked('design')} type="design" />
          </Row>
          {urlPath.includes('write') ? (
            <HelpIconArea className="help-area">
              <HelpIcon className="help-icon" />
              <img className="hover-img" alt="호버 이미지" src="/src/writePage/TagHoverImage.png" />
            </HelpIconArea>
          ) : (
            <></>
          )}
        </Row>
        <Row alignItems="flex-end" justifyContent="space-between" width="100%">
          <Row gap="12px">
            <CategoryTextArea>활동별</CategoryTextArea>
            <Filter onClick={onClickButton} isClicked={isClicked('society')} type="society" />
            <Filter onClick={onClickButton} isClicked={isClicked('intern')} type="intern" />
            <Filter onClick={onClickButton} isClicked={isClicked('project')} type="project" />
          </Row>
          {urlPath.includes('write') ? <></> : <TextArea>* 태그를 선택해 분류해볼 수 있어요</TextArea>}
        </Row>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div<TagAreaProps>`
  width: ${(props) => props.width};
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

const TextArea = styled.div`
  ${theme.typo.Label2};
  color: ${theme.palette.Gray20};
`;

const HelpIconArea = styled.div`
  & .hover-img {
    display: none;
  }

  & .help-icon:hover + .hover-img {
    display: block;
    position: absolute;
    //TODO 비율에 따른 위치 조정 필요
    top: 159%;
    left: 48%;
    z-index: 1;
  }
`;
