import { theme } from '../../styles/theme';

interface CheckIconProps {
  type: string;
  // 'plan' | 'dev' | 'design' | 'society' | 'intern' | 'project'
}
export function CheckIcon({ type }: CheckIconProps) {
  return (
    <svg
      width='16'
      height='18'
      viewBox='0 0 16 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 8.76727L6.36948 13.1057L14.2569 5.23688L13.0138 4L6.36948 10.6133L3.22445 7.53039L2 8.76727Z'
        fill={
          type === 'plan'
            ? theme.palette.Minttext
            : type === 'dev'
            ? theme.palette.Blue100
            : type === 'design'
            ? theme.palette.Purple100
            : theme.palette.Black
        }
      />
    </svg>
  );
}
