import { client } from './client';

export function postPosts(post: object) {
  console.log(post);

  return client.post('/posts/post', post).then((res) => {
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

export async function getUserPosts(
  userId: number,
  pageNum: number,
  limit: number,
  partTag: string,
  actTag: string
) {
  return await client
    .get(`/posts/${userId}`, {
      params: {
        partTag: partTag && partTag,
        actTag: actTag && actTag,
        pageNum: pageNum,
        limit: limit,
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

export async function getUserScraps(
  pageNum: number,
  limit: number,
  partTag: string,
  actTag: string
) {
  if (partTag && actTag) {
    return await client.get(`/posts/scraps`, {
      params: {
        partTag: partTag,
        actTag: actTag,
        pageNum: pageNum,
        limit: limit,
      },
    });
  } else if (partTag && !actTag) {
    return await client.get(`/posts/scraps`, {
      params: {
        partTag: partTag,
        pageNum: pageNum,
        limit: limit,
      },
    });
  } else if (!partTag && actTag) {
    return await client.get(`/posts/scraps`, {
      params: {
        actTag: actTag,
        pageNum: pageNum,
        limit: limit,
      },
    });
  } else {
    return await client
      .get(`/posts/scraps`, {
        params: {
          pageNum: pageNum,
          limit: limit,
        },
      })
      .then((res) => {
        return res.data.data;
      });
  }
}
