import { MouseEventHandler, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/Auth/userState';
import { Button } from '../common/Button';
import { Flex, Text } from '../common/Wrapper';

export const Grade = (props: any) => {
  const [selectedGrade, setSelectedGrade] = useState<number>();
  const grades = [1, 2, 3, 4];
  const user = useRecoilValue(userState);

  const handleButtonClick = (grade: number) => {
    setSelectedGrade(grade);
  };

  useEffect(() => {
    if (props.isModify) {
      setSelectedGrade(user.grade);
    }
  }, []);

  return (
    <Flex direction='column' align='flex-start' width={588} gap={36}>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        학년을 선택해 주세요.
      </Text>

      <Controller
        rules={{ required: true }}
        control={props.control}
        name='grade'
        render={({ field: { onChange } }) => (
          <Flex justify='space-between' width={588} gap={15}>
            {grades.map((grade: number) => (
              <Button
                key={grade}
                type={'medium'}
                content={`${grade}학년`}
                color={`${grade === selectedGrade ? 'mint' : 'gray'}`}
                onClick={() => {
                  handleButtonClick(grade);
                  onChange(grade);
                }}
                width={136}
              />
            ))}
          </Flex>
        )}
      />
    </Flex>
  );
};
