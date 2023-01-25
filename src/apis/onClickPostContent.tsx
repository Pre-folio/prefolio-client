import client from './client';

export function getScraps(postId: number, isScrapped: boolean) {
  return client.get(`/posts/scraps/${postId}`, { params: { isScrapped: isScrapped } }).then((res) => {
    console.log(res.data);

    return res.data;
  });
}

export function getLikes(postId: number, isLiked: boolean) {
  return client.get(`/posts/likes/${postId}`, { params: { isLiked: isLiked } }).then((res) => {
    console.log(res.data);

    return res.data;
  });
}
