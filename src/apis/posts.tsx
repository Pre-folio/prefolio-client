import { FeedRequestProps } from '../hooks/usePosts';
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

export async function getUserPosts(userId: number, pageNum: number, limit: number, partTag: string, actTag: string) {
  return await client
    .get(`/posts/${userId}`, {
      params: {
        partTagList: partTag && partTag,
        actTagList: actTag && actTag,
        pageNum: pageNum,
        limit: limit,
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

export interface ScrapRequestProps {
  partTagList?: string;
  actTagList?: string;
  pageNum: number;
  limit: number;
}
export async function getUserScraps(param: ScrapRequestProps) {
  if (param.partTagList && param.actTagList) {
    const res = await client.get(`/posts/scraps`, {
      params: param,
    });
    return res.data.data;
  } else if (param.partTagList && !param.actTagList) {
    const res = await client.get(`/posts/scraps`, {
      params: {
        partTagList: param.partTagList,
        pageNum: param.pageNum,
        limit: param.limit,
      },
    });
    return res.data.data;
  } else if (!param.partTagList && param.actTagList) {
    const res = await client.get(`/posts/scraps`, {
      params: {
        actTagList: param.actTagList,
        pageNum: param.pageNum,
        limit: param.limit,
      },
    });
    return res.data.data;
  } else {
    return await client
      .get(`/posts/scraps`, {
        params: {
          pageNum: param.pageNum,
          limit: param.limit,
        },
      })
      .then((res) => {
        return res.data.data;
      });
  }
}
