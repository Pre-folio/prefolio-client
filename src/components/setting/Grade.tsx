import { useState } from 'react';
import { Button } from '../common/Button';
import { Flex, Text } from '../common/Wrapper';

export const Grade = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const grades = ['1학년', '2학년', '3학년', '4학년'];

  //버튼 컴포넌트 width 수정 가능하도록 수정 필요
  const handleButtonClick = (grade: string) => {
    setSelectedGrade(grade);
  };

  return (
    <Flex direction='column' align='flex-start' gap={36}>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        학년을 선택해 주세요.
      </Text>
      <Flex justify='space-between' width={588} gap={15}>
        {grades.map((grade: string) => (
          <Button
            key={grade}
            type={'medium'}
            content={grade}
            color={`${grade === selectedGrade ? 'mint' : 'gray'}`}
            onClick={() => handleButtonClick(grade)}
          />
        ))}
      </Flex>
    </Flex>
  );
};
