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
  margin-left: calc(-50vw + 50%);
`;

const StyledCarousel = styled(Carousel)`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  .MuiButtonBase-root {
    top: -40px;
    z-index: 1;
  }
  .css-1m9128y {
    display: none;
  }
`;

const Section1 = styled.img`
  z-index: -1;
  position: relative;
  bottom: 0;
  left: 0;

  height: 777px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  object-fit: cover;
`;
