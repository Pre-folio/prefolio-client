import { FeedRequestProps, SearchRequestProps } from '../hooks/usePosts';
import { setAccessToken } from '../utils/cookie';
import { client, publicClient } from './client';

export type SortType = 'CREATED_AT' | 'LIKES' | 'HITS';
export type PartType = 'plan' | 'dev' | 'design';
export type ActType = 'society' | 'project' | 'intern';
export interface PostResponse {
  posts: [
    {
      id: number;
      thumbnail: string;
      title: string;
      partTag: string[];
      actTag: string[];
      hits: number;
      createdAt: string;
      isScrapped: boolean;
    }
  ];
  totalPages: number;
  totalResults: number;
}

export interface UserPostRequest {
  userId: number;
  pageNum: number;
  limit: number;
  partTag: string;
  actTag: string;
}

export interface ScrapRequest {
  partTagList?: string;
  actTagList?: string;
  pageNum: number;
  limit: number;
}

export interface ScrapResponse {
  scraps: number;
  isScrapped: boolean;
}

export const postAPI = {
  ALL: async (
    token: string,
    param: FeedRequestProps
  ): Promise<PostResponse> => {
    const response = await publicClient.get(`/posts/all?`, {
      params: {
        ...param,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  },

  SEARCH: async (data: SearchRequestProps): Promise<PostResponse> => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    let param = keys.reduce((accumulator, value, index) => {
      return { ...accumulator, [value]: values[index] };
    }, {});

    const response = await client.get('/posts/search', {
      params: { ...param },
    });

    console.log('response', response.data.data);

    return response.data.data;
  },

  USER: async (data: UserPostRequest): Promise<ScrapResponse> => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    let param = keys.reduce((accumulator, value, index) => {
      return { ...accumulator, [value]: values[index] };
    }, {});
    const response = await client.get(`/posts/${data.userId}`, {
      params: { ...param },
    });
    return response.data.data;
  },

  SCRAP: async (data: ScrapRequest): Promise<ScrapResponse> => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    let param = keys.reduce((accumulator, value, index) => {
      return { ...accumulator, [value]: values[index] };
    }, {});

    const response = await client.get(`/posts/scraps/`, {
      params: { ...param },
    });

    return response.data.data;
  },
};

export default postAPI;
