import { client } from './client';

export const sourceAPI = {
  PRESIGNED_URL: async (path: string, userId: number): Promise<string> => {
    const response = await client.get(
      `/source/url?userId=${userId}&path=${path}`
    );

    return response.data.data.url;
  },

  UPLOAD_S3: async (data: any): Promise<string> => {
    console.log('data', data);
    const response = await client.post(data.url, data.source);
    console.log('s3 업로드', response);

    return response.data.data;
  },
};

export default sourceAPI;
