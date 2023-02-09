import { useRouter } from 'next/router';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ActType, PartType } from '../../../apis/post';
import { useTagArea } from '../../../hooks/useTagArea';

import { theme } from '../../../styles/theme';
import { HelpIcon } from '../../Icons/HelpIcon';
import { Filter } from '../Filter';
import TagInfo from '../TagInfo';
import { Column, Row } from '../Wrapper';

interface TagAreaProps {
  width?: string;
  type: PartType[];
  act: ActType[];
  handleTagAreaClick?: any;
}

/**
 *
 * @returns recoil의 selectedTagsListState로 상태관리 가능
 */
export function TagArea({
  width,
  type,
  act,
  handleTagAreaClick,
}: TagAreaProps) {
  //TODO 페이지별로 아이콘 변경

  // const [selectedTagsList, setSelectedTagsList] = useRecoilState(selectedTagsListState);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const urlPath: string = router.asPath;
  const [tagInfo, setTagInfo] = useState<boolean>(false);

  const isClicked = (arg: any) => {
    if (act === undefined && type === undefined) {
      return false;
    } else {
      const List: (PartType | ActType)[] = [...act, ...type];
      if (List.includes(arg)) {
        return true;
      }
      return false;
    }
  };

  return (
    <Wrapper width={width}>
      <Column gap='18px' alignItems='flex-start'>
        <Row width='100%' justifyContent={'space-between'}>
          <Row gap='12px'>
            <CategoryTextArea>분야별</CategoryTextArea>
            <Filter
              onClick={handleTagAreaClick}
              isClicked={isClicked('plan')}
              type='plan'
            />
            <Filter
              onClick={handleTagAreaClick}
              isClicked={isClicked('dev')}
              type='dev'
            />
            <Filter
              onClick={handleTagAreaClick}
              isClicked={isClicked('design')}
              type='design'
            />
          </Row>
          {urlPath.includes('write') ? (
            <div style={{ position: 'relative' }}>
              <HelpIconArea
                className='help-area'
                onMouseOut={() => setTagInfo(false)}
                onMouseOver={() => setTagInfo(true)}
              >
                <HelpIcon className='help-icon' />
                <TagInfo className='hover-image' />
              </HelpIconArea>
              <div
                style={{
                  zIndex: '3',
                  position: 'absolute',
                  top: '130%',
                  right: '48%',
                }}
              >
                {tagInfo && <TagInfo className='hover-image' />}
              </div>
            </div>
          ) : (
            <></>
          )}
        </Row>
        <Row alignItems='flex-end' justifyContent='space-between' width='100%'>
          <Row gap='12px'>
            <CategoryTextArea>활동별</CategoryTextArea>
            <Filter
              onClick={handleTagAreaClick}
              isClicked={isClicked('society')}
              type='society'
            />
            <Filter
              onClick={handleTagAreaClick}
              isClicked={isClicked('intern')}
              type='intern'
            />
            <Filter
              onClick={handleTagAreaClick}
              isClicked={isClicked('project')}
              type='project'
            />
          </Row>
          {urlPath.includes('write') ? (
            <></>
          ) : (
            <TextArea>* 태그를 선택해 분류해볼 수 있어요</TextArea>
          )}
        </Row>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ width?: string }>`
  width: ${(width) => width?.width};
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
  & > div {
    display: none !important;
  }

  & .help-icon:hover {
    > div {
      display: visible !important;
      position: absolute;
      //TODO 비율에 따른 위치 조정 필요
      top: 159%;
      left: 48%;
      z-index: 1;
    }
  }
`;
