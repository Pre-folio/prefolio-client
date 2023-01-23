import client from './client';

export function postPosts(post: object) {
  console.log(post);

  return client.post('/posts/post', { post }).then((res) => {
    console.log(res);
    return res.data.data.postId;
  });
}
