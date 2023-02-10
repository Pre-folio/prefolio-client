import { FeedRequestProps } from '../hooks/usePosts';
import { client, publicClient } from './client';

export function postPosts(token: string, post: object) {
  return publicClient
    .post(
      '/posts/post',
      { ...post },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      return { postId: res.data.data.postId, status: res.status };
    });
}

export async function getPost(id: number, token: string) {
  return await publicClient
    .get(`/posts/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    });
}

export async function getUserPosts(
  token: string,
  userId: number,
  pageNum: number,
  limit: number,
  partTag: string,
  actTag: string
) {
  return await publicClient
    .get(`/posts/${userId}`, {
      params: {
        partTag: partTag && partTag,
        actTag: actTag && actTag,
        pageNum: pageNum,
        limit: limit,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}

export interface ScrapRequestProps {
  token: string;
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
