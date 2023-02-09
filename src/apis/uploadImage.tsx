import axios from 'axios';
import { client, publicClient } from './client';

interface getPresignedUrlProps {
  userId: number;
  path: string;
}
/**
 *
 * @param path PROFILE, IMAGE, THUMBNAIL 중 택1 **반드시 대문자**
 * @returns presigned url
 */
export function getPresignedUrl(prop: getPresignedUrlProps) {
  return publicClient
    .get(`/source/url`, {
      params: {
        userId: prop.userId,
        path: prop.path,
      },
    })
    .then((res) => {
      return res.data.data.url;
    });
}

interface uploadFileProps {
  url: string;
  file: Blob | File | any;
}
/**
 *
 * @param url getPresignedUrl 함수로부터 받은 presigned url
 * @param file 업로드할 raw 파일
 * @returns 응답 코드
 */
export function uploadFile({ url, file }: any) {
  return axios.put(url, file).then((res) => {
    return res.status;
  });
}
