import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import sourceAPI from '../apis/source';
import { onSelectFiles } from '../utils/getBase64';

export const usePresignedURL = () => {
  const queryClient = useQueryClient();

  const [source, setSource] = useState<string>();

  const url = useQuery(['presigned_url'], () => {
    return sourceAPI.PRESIGNED_URL('PROFILE');
  });

  const uploadS3Mutation = useMutation(sourceAPI.UPLOAD_S3, {
    onSuccess: (url: string) => {
      console.log(`${url}에 업로드`);
    },
  });

  return { url, setSource };
};
