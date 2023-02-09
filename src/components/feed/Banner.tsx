import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { BannerImage } from './BannerImage';

// 반응이 너무 느림... 바꿀 예정

export const Banner = () => {
  const src = [
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/banner0.jpg',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/banner1.jpg',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/banner2.jpg',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/banner3.jpg',
  ];
  return (
    <div>
      <StyledCarousel>
        <BannerImage
          title='함께하는 대학생 스펙 관리'
          description1='친구들의 스펙 활동을 구경하고'
          description2='나의 활동도 기록하세요!'
          src={src[0]}
        ></BannerImage>
        <BannerImage
          title='IT 기획 분야 스펙 고민된다면?'
          description1='기획 분야 사람들의 활동 게시글을'
          description2='구경해보세요!'
          src={src[1]}
        ></BannerImage>
        <BannerImage
          title='IT 개발 분야 스펙 고민된다면?'
          description1='개발 분야 사람들의'
          description2='스펙 활동을 둘러보세요!'
          src={src[2]}
        ></BannerImage>
        <BannerImage
          title='UXUI 포트폴리오 고민된다면?'
          description1='디자인 분야 사람들의'
          description2='스펙 활동을 둘러보세요!'
          src={src[3]}
        ></BannerImage>
      </StyledCarousel>
    </div>
  );
};

const StyledCarousel = styled(Carousel)`
  height: 444px;
  width: 1200px;

  .MuiSvgIcon-root {
    background-color: transparent !important;
  }

  .css-hn784z {
    display: block !important;
    left: calc(50% - 576px) !important;
  }
  .css-1abc02a {
    display: block !important;
    left: calc(50% + 576px) !important;
  }

  .css-1m9128y {
    margin: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;

    position: absolute;
    top: 370px;
    z-index: 3;
  }
  .MuiButtonBase-root {
    background-color: transparent !important;
    color: ${theme.palette.Gray50};
  }

  .MuiTouchRipple-root {
    background-color: transparent;
    width: 24px;
    height: 18px;
    display: none;

    .span {
      display: none !important;
    }
  }

  circle {
    display: none;
  }

  width: 100vw;
  margin-left: calc(-50vw + 50%);
  @media screen and (max-width: 1200px) {
    width: 1200px;
    margin: 0;
  }
`;
