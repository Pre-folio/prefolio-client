import client from './client';
import axios from 'axios';

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
  console.log(url, file);

  return axios.put(url, file).then((res) => {
    console.log(res);

    return res.status;
  });
}
