import { client } from './client';

export function postPosts(post: object) {
  console.log(post);

  return client.post('/posts/post', { post }).then((res) => {
    console.log(res);
    return res.data.data.postId;
  });
}

export async function getPost(id: number) {
  return await client.get(`/posts/post/${id}`).then((res) => {
    // console.log(res);
    return res;
  });
}
