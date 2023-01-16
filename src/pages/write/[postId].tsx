import { useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from '../../components/common/DatePicker';
import { Input } from '../../components/common/Input';
import { ProgressBar } from '../../components/common/ProgressBar';
import { TagArea } from '../../components/common/TagArea';
import { Column, Row } from '../../components/common/Wrapper';
import { theme } from '../../styles/theme';
import { Tag } from '../../components/common/Tag';
import { Filter } from '../../components/common/Filter';

const Write = () => {
  const [toolsList, setToolsList] = useState<string[]>(['FIGMA']);
  return (
    <>
      <ThumbnailImageWrapper>
        <ImageUploadArea />
      </ThumbnailImageWrapper>
      <div style={{ alignItems: 'center' }}>
        <Column
          marginTop="60px"
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ height: '800px' }}
          gap="42px"
        >
          <Input width={1200} placeholder="제목을 입력하세요." typo={'Heading3'} />
          <Row height="auto">
            <CategoryTextArea>
              활동 기간
              <span>*</span>
            </CategoryTextArea>
            <Row>
              <DatePicker height={46} placeholder="시작 날짜를 선택하세요." typo={'Body1'} />
              <div style={{ width: '126px', textAlign: 'center' }}>~</div>
              <DatePicker height={46} placeholder="종료 날짜를 선택하세요." typo={'Body1'} />
            </Row>
          </Row>
          <Row marginTop="-17px">
            <CategoryTextArea>기여도</CategoryTextArea>
            <ProgressBar />
          </Row>
          <Row gap="24px" width="100%" justifyContent="flex-start" marginTop="-17px">
            <CategoryTextArea>맡은 역할</CategoryTextArea>
            <Input typo={'Body1'} width={1098} height={46} placeholder="활동에서 주로 맡은 역할을 작성해주세요." />
          </Row>
          <Row gap="24px" width="100%" justifyContent="flex-start" alignItems="center">
            <CategoryTextArea>사용 툴</CategoryTextArea>
            <Input
              width={1098}
              height={46}
              placeholder="활동에서 사용한 툴을 작성해주세요. (최대 8개)"
              typo={'Body1'}
            />
          </Row>
          {toolsList.length === 0 ? (
            ''
          ) : (
            <Column marginTop="-22px">
              <Row justifyContent="flex-end">
                <CategoryTextArea />
                <div style={{ width: '1098px', backgroundColor: theme.palette.Gray20, height: '1px' }} />
              </Row>
              <Row marginTop="20px" justifyContent="flex-end" alignItems="flex-end">
                <CategoryTextArea />
                <Row gap="12px">
                  {toolsList.map((tool) => {
                    return (
                      <Filter
                        key={tool}
                        type={tool}
                        style={{
                          backgroundColor: theme.palette.Gray10,
                          color: theme.palette.Gray40,
                          boxShadow: `${theme.shadow.Button.Black} !important`,
                        }}
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
            <TagArea width="1098px" />
          </Row>
        </Column>
      </div>
    </>
  );
};

const ThumbnailImageWrapper = styled.div`
  width: 100vw;
  height: 560px;
  background-color: ${theme.palette.Gray15};
  display: flex;
  justify-content: center;
  margin-left: calc(-50vw + 50%);
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
  /* background-color: red; */

  & span {
    color: ${theme.palette.Mint100};
  }
`;

export default Write;
