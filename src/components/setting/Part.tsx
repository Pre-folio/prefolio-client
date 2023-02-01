import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { PartType } from '../../apis/post';
import { PartCard } from '../common/PartCard';
import { Flex, Text } from '../common/Wrapper';

export const Part = (props: any) => {
  const [selectedPart, setSelectedPart] = useState<string>('');
  const parts: PartType[] = ['plan', 'dev', 'design'];

  // 선택된 PartCard 색상, active 색상
  const handleButtonClick = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <Flex direction='column' align='flex-start' gap={36}>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        분야를 선택해 주세요.
      </Text>
      <Controller
        rules={{ required: true }}
        control={props.control}
        name='type'
        render={({ field: { onChange } }) => (
          <Flex justify='space-between' width={588}>
            {parts.map((part: PartType) => (
              <PartCard
                key={part}
                varient={part}
                selected={part === selectedPart}
                onClick={() => {
                  handleButtonClick(part);
                  onChange(part);
                }}
              />
            ))}
          </Flex>
        )}
      />
    </Flex>
  );
};
