import { client, publicClient } from './client';

export function getScraps(token: string, postId: number) {
  return publicClient
    .get(`/posts/scraps/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function getLikes(token: string, postId: number) {
  return publicClient
    .get(`/posts/likes/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export function deletePost(token: string, postId: number) {
  return publicClient
    .delete(`/posts/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      res;
    });
}
