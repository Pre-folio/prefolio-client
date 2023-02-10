import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import sourceAPI from '../apis/source';
import { userState } from '../store/Auth/userState';
import { onSelectFiles } from '../utils/getBase64';

export const usePresignedURL = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useRecoilState(userState);

  const [source, setSource] = useState<string>();

  const url = useQuery(['presigned_url'], () => {
    return sourceAPI.PRESIGNED_URL('PROFILE', user.userId);
  });

  return { url, setSource };
};
