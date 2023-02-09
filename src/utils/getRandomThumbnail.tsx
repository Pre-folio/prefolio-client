export function getRandomThumbnail() {
  const src = [
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/thumbnail1.png',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/thumbnail2.png',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/thumbnail3.png',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/thumbnail4.png',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/thumbnail5.png',
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/thumbnail6.png',
  ];

  const randomSrc = src[Math.floor(Math.random() * src.length)];

  return randomSrc;
}
