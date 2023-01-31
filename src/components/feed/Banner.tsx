import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

// 반응이 너무 느림... 바꿀 예정

export const Banner = () => {
  const src = [
    '/images/feed/banner1.jpg',
    '/images/feed/banner2.jpg',
    '/images/feed/banner3.jpg',
  ];
  return (
    <div>
      <StyledCarousel>
        <BannerImage src={src[0]} />
        <BannerImage src={src[1]} />
        <BannerImage src={src[2]} />
      </StyledCarousel>
    </div>
  );
};

const BannerImage = styled.img`
  width: 100vw;
  /* height: 444px; */
  margin-left: calc(-50vw + 50%);

  @media screen and (max-width: 1200px) {
    width: 1200px;
    margin: 0;
  }
`;

const StyledCarousel = styled(Carousel)`
  height: 444px;
  .MuiButtonBase-root {
    top: -40px;
    z-index: 1;
  }
  .css-1m9128y {
    display: none;
  }

  width: 100vw;
  margin-left: calc(-50vw + 50%);
  @media screen and (max-width: 1200px) {
    width: 1200px;
    margin: 0;
  }
`;

const Section1 = styled.img`
  z-index: -1;
  position: relative;
  bottom: 0;
  left: 0;

  height: 777px;
  width: 100vw;
  width: 100vw;
  @media screen and (max-width: 1200px) {
    width: 1200px;
  }

  object-fit: cover;
`;
