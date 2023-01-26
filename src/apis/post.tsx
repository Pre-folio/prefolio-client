import { setAccessToken } from '../utils/cookie';
import { client, publicClient } from './client';

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
    }
  ];
  totalPages: number;
  totalResults: number;
}

export const postAPI = {
  ALL: async (token: string): Promise<PostResponse> => {
    const response = await publicClient.get(`/posts/all?`, {
      params: {
        sortBy: 'CREATED_AT',
        pageNum: 0,
        limit: 16,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  },

  //   SEARCH: async (data: any): Promise<PostResponse> => {
  //     console.log(data);
  //     const response = await client.post('/user/join', {
  //       nickname: data.nickname,
  //       profileImage: data.profileImage,
  //       grade: data.grade,
  //       type: data.type,
  //     });

  //     return response.data.data;
  //   },
};

export default postAPI;
