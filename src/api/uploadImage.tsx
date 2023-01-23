import client from './client';
import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNSIsImlzcyI6InByZWZvbGlvIiwiaWF0IjoxNjc0NDg1NTkxLCJleHAiOjE2NzQ1NzE5OTEsImlkIjoxNSwicm9sZXMiOiJVU0VSIn0.XGkCApVUHWQamjJ7wjutgzTDvYe9KgbHYe5GKSWfkbk';

interface getPresignedUrlProps {
  path: string;
}
/**
 *
 * @param path PROFILE, IMAGE, THUMBNAIL 중 택1 **반드시 대문자**
 * @returns presigned url
 */
export function getPresignedUrl(path: any) {
  return client
    .get(`/source/url`, {
      params: {
        path: path,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res.data.data.url;
    });
}

interface uploadFileProps {
  url: string;
  file: Blob | any;
}
/**
 *
 * @param url getPresignedUrl 함수로부터 받은 presigned url
 * @param file 업로드할 raw 파일
 * @returns 응답 코드
 */
export function uploadFile({ url, file }: uploadFileProps) {
  return axios.put(url, file).then((res) => {
    return res.status;
  });
}
