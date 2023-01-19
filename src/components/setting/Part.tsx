import { useState } from 'react';
import { Button } from '../common/Button';
import { PartCard, PartCardVarient } from '../common/PartCard';
import { Flex, Text } from '../common/Wrapper';

export const Part = () => {
  const [selectedPart, setSelectedPart] = useState<string>('');
  const parts: PartCardVarient[] = ['plan', 'dev', 'design'];

  // 선택된 PartCard 색상, active 색상
  const handleButtonClick = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <Flex direction='column' align='flex-start' gap={36}>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        분야를 선택해 주세요.
      </Text>
      <Flex justify='space-between' width={588}>
        {parts.map((part: PartCardVarient) => (
          <PartCard
            key={part}
            varient={part}
            selected={part === selectedPart}
            onClick={() => handleButtonClick(part)}
          />
        ))}
      </Flex>
    </Flex>
  );
};
