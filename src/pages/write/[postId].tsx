import styled from 'styled-components';
import { DatePicker } from '../../components/common/DatePicker';
import { Header } from '../../components/common/Header';
import { Input } from '../../components/common/Input';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Column, Row, Section } from '../../components/common/Wrapper';
import { theme } from '../../styles/theme';

const Write = () => {
  return (
    <>
      <Header />
      <Section style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ThumbnailImageWrapper>
          <ImageUploadArea />
        </ThumbnailImageWrapper>
        <div style={{ alignItems: 'center' }}>
          <Column
            marginTop="60px"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ backgroundColor: 'aqua', height: '400px' }}
            gap="42px"
          >
            <Input width={1200} placeholder="제목을 입력하세요." />
            <Row gap="24px" height="auto">
              <CategoryTextArea>
                활동 기간
                <span>*</span>
              </CategoryTextArea>
              <Row>
                <DatePicker placeholder="시작 날짜를 선택하세요." />
                <div style={{ width: '126px', textAlign: 'center' }}>~</div>
                <DatePicker placeholder="종료 날짜를 선택하세요." />
              </Row>
            </Row>
            <Row gap="24px">
              <CategoryTextArea>기여도</CategoryTextArea>
              <ProgressBar />
            </Row>
          </Column>
        </div>
      </Section>
    </>
  );
};

const ThumbnailImageWrapper = styled.div`
  width: 100%;
  height: 560px;
  background-color: ${theme.palette.Gray15};
  display: flex;
  justify-content: center;
`;

const ImageUploadArea = styled.div`
  width: 996px;
  height: 100%;
  background-color: ${theme.palette.Gray30};
`;

const CategoryTextArea = styled.div`
  width: 78px;
  ${theme.typo.Label1};
  text-align: left;
  background-color: red;

  & span {
    color: ${theme.palette.Mint100};
  }
`;

export default Write;
