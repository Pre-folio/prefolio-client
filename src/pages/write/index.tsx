import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from '../../components/common/DatePicker';
import { Input } from '../../components/common/Input';
import { ProgressBar } from '../../components/common/ProgressBar';
import { TagArea } from '../../components/common/TagArea';
import { Column, Row, Space } from '../../components/common/Wrapper';
import { theme } from '../../styles/theme';
import { Filter } from '../../components/common/Filter';
import { Button } from '../../components/common/Button';
import { GuideLine } from '../../components/writePage/GuideLine';
import { useRecoilState, useRecoilValue } from 'recoil';
import dynamic from 'next/dynamic';
import useInput from '../../hooks/useInput';
import { UploadIcon } from '../../components/Icons/UploadIcon';
import { TrashCanIcon } from '../../components/Icons/TrashCanIcon';
import { getPresignedUrl, uploadFile } from '../../apis/uploadImage';
import { formatDate } from '../../utils/formatDate';
import { userState } from '../../store/Auth/userState';
import { useTagArea } from '../../hooks/useTagArea';
import { useToast } from '../../hooks/useToasts';
import { getRandomThumbnail } from '../../utils/getRandomThumbnail';

const TextEditor = dynamic(() => import('../../components/writePage/TextEditor'), { ssr: false });

const Write = () => {
  const [isGuideLineButtonClicked, setIsGuideLineButtonClicked] = useState<boolean>(false);
  const [thumbnailUploadUrl, setThumbnailUploadUrl] = useState('');
  const title = useInput(''); // title.value가 값임
  const startDate = useInput(''); // startDate.value 가 값임
  const endDate = useInput(''); // endDate.value가 값임
  const contribution = useInput(''); // contribution.value가 값임
  const task = useInput(''); // task.value가 값임
  const [toolsList, setToolsList] = useState<string[]>([]);
  // const tags = useRecoilValue(selectedTagsListState);
  const { openToast } = useToast();

  const [user, setUser] = useRecoilState(userState);
  const { type, setType, act, setAct, sort, setSort, handleTagClick, handleTabClick } = useTagArea();

  const isError = !startDate.value || !endDate.value || type.length === 0 || act.length === 0;

  const onEnterToolBar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (toolsList.length > 7) {
        alert('최대 8개까지만 가능합니다!');
        e.currentTarget.value = '';
        return;
      }
      setToolsList([...toolsList, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const onUploadThumbnailImage = async (file: any) => {
    // presigned url 받는 api.
    const url = await getPresignedUrl({
      userId: user.userId,
      path: 'THUMBNAIL',
    });
    const slicedUrl = url.slice(0, url.indexOf('?x-amz'));

    if (url) {
      // presigned url에 파일 업로드 후 url 저장.
      const statusCode = await uploadFile({ url, file });
      if (statusCode === 200) {
        setThumbnailUploadUrl(slicedUrl);
      }
    }
  };

  const onClickTrashCanIcon = () => {
    setThumbnailUploadUrl('');
  };

  const onClickCancelButton = (toolName: string) => {
    const tempToolsList = toolsList.filter((tool) => tool !== toolName);
    setToolsList(tempToolsList);
  };

  // useEffect(() => {
  //   setThumbnailUploadUrl('');
  // }, []);

  return (
    <>
      <ThumbnailImageWrapper className="thumnail-wrapper" src={thumbnailUploadUrl}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {thumbnailUploadUrl.length > 1 ? (
            <img
              className="thumbnail-image"
              src={thumbnailUploadUrl}
              alt="게시글 썸네일 이미지"
              width="996px"
              height="100%"
              style={{
                objectFit: 'cover',
                backgroundImage: 'size',
                zIndex: '3',
                position: 'relative',
              }}
            />
          ) : (
            <ImageUploadArea />
          )}
        </div>
        <Column
          style={{
            position: 'absolute',
            zIndex: '1',
            left: `calc(50% + 548px)`,
            marginTop: '438px',
          }}
          gap="30px"
        >
          <div>
            <input
              type="file"
              id="img-upload"
              style={{ display: 'none' }}
              onChange={(e) => {
                if (e.target.files) return onUploadThumbnailImage(e.target.files[0]);
              }}
              accept="image/x-png,image/gif,image/jpeg"
            />
            <UploadIcon htmlFor="img-upload" />
          </div>
          <TrashCanIcon onClick={onClickTrashCanIcon} />
        </Column>
      </ThumbnailImageWrapper>
      <div style={{ alignItems: 'center' }}>
        <Column
          marginTop="60px"
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ height: '800px' }}
          gap="42px"
        >
          <Input width={1200} placeholder="제목을 입력하세요." typo={'Heading3'} {...title} />
          <Row height="auto">
            <CategoryTextArea>
              활동 기간
              <span>*</span>
            </CategoryTextArea>
            <Row>
              <DatePicker {...startDate} height={46} placeholder="시작 날짜를 선택하세요." typo={'Body1'} />
              <div style={{ width: '126px', textAlign: 'center' }}>~</div>
              <DatePicker {...endDate} height={46} placeholder="종료 날짜를 선택하세요." typo={'Body1'} />
            </Row>
          </Row>
          <Row marginTop="-17px">
            <CategoryTextArea>기여도</CategoryTextArea>
            <ProgressBar {...contribution} />
          </Row>
          <Row gap="24px" width="100%" justifyContent="flex-start" marginTop="-17px">
            <CategoryTextArea>맡은 역할</CategoryTextArea>
            <Input
              typo={'Body1'}
              width={1098}
              height={46}
              placeholder="활동에서 주로 맡은 역할을 작성해주세요."
              {...task}
            />
          </Row>
          <Row gap="24px" width="100%" justifyContent="flex-start" alignItems="center">
            <CategoryTextArea>사용 툴</CategoryTextArea>
            <Input
              width={1098}
              height={46}
              placeholder="활동에서 사용한 툴을 작성 후 엔터키를 누르면 등록됩니다. (최대 8개)"
              typo={'Body1'}
              onKeyPress={onEnterToolBar}
            />
          </Row>
          {toolsList.length === 0 ? (
            ''
          ) : (
            <Column marginTop="-22px">
              <Row justifyContent="flex-end">
                <CategoryTextArea />
                <div
                  style={{
                    width: '1098px',
                    border: `1px solid ${theme.palette.Gray15}`,
                  }}
                />
              </Row>
              <Row marginTop="20px" justifyContent="flex-start" alignItems="flex-start">
                <CategoryTextArea />
                <Row
                  width="1098px"
                  gap="12px"
                  justifyContent="flex-start"
                  alignItems="flext-start"
                  style={{ flexWrap: 'wrap' }}
                >
                  {toolsList.map((tool) => {
                    return (
                      <Filter
                        key={tool}
                        type={tool}
                        hasCancelButton
                        style={{
                          backgroundColor: theme.palette.Gray10,
                          color: theme.palette.Gray40,
                          boxShadow: `${theme.shadow.Button.Black} !important`,
                          cursor: 'default',
                        }}
                        onClickCancelButton={(e) => onClickCancelButton(tool)}
                      />
                    );
                  })}
                </Row>
              </Row>
            </Column>
          )}
          <Row justifyContent="flex-start" alignItems="flex-start">
            <CategoryTextArea>
              태그 선택
              <span>*</span>
            </CategoryTextArea>
            <TagArea width="1098px" type={type} act={act} handleTagAreaClick={handleTagClick} />
          </Row>
          <Row justifyContent="flex-start" alignItems="flex-start">
            <CategoryTextArea>
              본문 작성
              <span>*</span>
            </CategoryTextArea>
            <Column justifyContent="flex-start" alignItems="flex-start">
              {act.length > 0 ? (
                <Button
                  type={'small'}
                  content={isGuideLineButtonClicked ? '가이드라인 접기' : '가이드라인 보기'}
                  color={'mint'}
                  onClick={() => {
                    setIsGuideLineButtonClicked(!isGuideLineButtonClicked);
                  }}
                />
              ) : (
                <Space height={34} />
              )}
              {isGuideLineButtonClicked && (
                <Column marginTop="20px" gap="14px">
                  {act.map((tag: any) => {
                    return <GuideLine type={tag} key={tag} />;
                  })}
                </Column>
              )}
            </Column>
          </Row>
          <div style={{ height: '300px' }}>
            <TextEditor
              thumbnailUploadUrl={thumbnailUploadUrl === '' ? getRandomThumbnail() : thumbnailUploadUrl}
              title={title.value}
              startDate={formatDate(startDate.value)}
              endDate={formatDate(endDate.value)}
              contribution={contribution.value}
              task={task.value}
              toolsList={toolsList}
              isError={isError}
              type={type}
              act={act}
            />
          </div>
        </Column>
      </div>
    </>
  );
};

const ThumbnailImageWrapper = styled.div<{ src: string }>`
  width: 100vw;
  height: 560px;

  background-color: ${theme.palette.Gray15};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;

  &::before {
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  display: flex;
  justify-content: center;
  margin-left: calc(-50vw + 50%);
  position: relative;
  object-fit: cover;
`;

const ImageUploadArea = styled.div`
  width: 996px;
  height: 100%;
  background-color: ${theme.palette.Gray30};
`;

const CategoryTextArea = styled.div`
  width: 102px;
  ${theme.typo.Label1};
  text-align: left;

  & span {
    color: ${theme.palette.Mint100};
  }
`;

export default Write;
