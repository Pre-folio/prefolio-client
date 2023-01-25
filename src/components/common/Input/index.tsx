import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { calcRem, KeyOfPalette, KeyOfTypo, theme } from '../../../styles/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  width?: number | string;
  height?: number;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: string;
  errorMessageColor?: KeyOfPalette;
  padding?: string;
  typo?: KeyOfTypo;
  setValue?: Function;
}

/**
 * @default: input (input 태그 속성 그대로)
 *
 * @param width: number (기본값: 100%)
 * @param height: number (기본값: 56px)
 * @param leftImage: 왼쪽에 들어갈 수 있는 element
 * @param rightImage: 오른쪽에 들어갈 수 있는 element
 * @param errorMessage: string
 * @param messageColor: KeyOfPalette
 */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, height = 56, errorMessageColor = 'Red', padding = '24px', typo = 'Label1', ...props }: InputProps, ref) => {
    return (
      <Wrapper>
        <InputWrapper width={props.width} height={height}>
          {props.leftIcon}
          <StyledInput value={value} ref={ref} onClick={props.onClick} typo={typo} {...props} />
          {props.rightIcon}
        </InputWrapper>

        {props.errorMessage && (
          <MessageWrapper errorMessage={props.errorMessage}>
            <Text color={errorMessageColor}>{props.errorMessage}</Text>
          </MessageWrapper>
        )}
      </Wrapper>
    );
  }
);
Input.displayName = 'Input';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div<{
  width?: number | string;
  height?: number;
  padding?: string;
}>`
  box-sizing: border-box;
  background: ${({ theme }) => theme.palette.Gray10};
  border-radius: 10px;

  padding: ${({ padding }) => (padding ? `${padding}` : `24px`)};
  gap: 20px;

  height: ${({ height }) => (height ? `${height}px` : `56px`)};
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledInput = styled.input<{
  typo: KeyOfTypo;
}>`
  box-sizing: border-box;
  border: none;
  background: transparent;
  padding: 0;

  width: 100%;
  line-height: 100%;

  ${({ typo, theme }) => theme.typo[typo]};
  color: ${({ theme }) => theme.palette.Black};

  ::placeholder {
    color: ${({ theme }) => theme.palette.Gray_100};
  }
`;

const MessageWrapper = styled.div<{
  errorMessage?: string;
}>`
  padding-left: 16px;
  padding-bottom: ${({ errorMessage }) => (errorMessage ? `${calcRem(18)}` : '0')};
  height: ${({ errorMessage }) => (errorMessage ? '0' : `${calcRem(18)}`)};
`;

const Text = styled.div<{
  color: KeyOfPalette;
}>`
  ${theme.typo.Body2}
  ${({ color, theme }) =>
    css`
      color: ${theme.palette[color]};
    `}
`;
