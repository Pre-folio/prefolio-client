import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import styled from 'styled-components';
import { Column } from '../common/Wrapper';
import { Button } from '../common/Button';
import { postPosts } from '../../apis/posts';
import { useRouter } from 'next/router';
import { getPresignedUrl, uploadFile } from '../../apis/uploadImage';

import { useRecoilState, useRecoilValue } from 'recoil';
import { Toast } from '../common/Toast';
import { useToast } from '../../hooks/useToasts';
import { userState } from '../../store/Auth/userState';
import { ConfirmationPopUp } from '../common/ConfirmationPopUp';
import { toastTypeState } from '../../store/Toast/toastState';

type HookCallback = (url: string, text?: string) => void;

const TextEditor = ({
  thumbnailUploadUrl,
  title,
  startDate,
  endDate,
  contribution,
  task,
  toolsList,
  isError,
  type,
  act,
}: any) => {
  const router = useRouter();
  const editorRef = useRef<Editor>(null);

  const { openToast } = useToast();
  const [user, setUser] = useRecoilState(userState);

  const [imageUrl, setImageUrl] = useState('');
  const [isUploadButtonClicked, setIsUploadButtonClicked] = useState(false);
  const toastType = useRecoilValue(toastTypeState);

  const onUploadImage = async (file: any, callback: HookCallback) => {
    const url = await getPresignedUrl({
      userId: user.userId,
      path: 'IMAGE',
    });
    console.log(url);
    const slicedUrl = url.slice(0, url.indexOf('?x-amz'));
    if (url) {
      // presigned url에 파일 업로드 후 url 저장.
      const statusCode = await uploadFile({ url, file });
      if (statusCode === 200) {
        setImageUrl(slicedUrl);
        callback(slicedUrl, '이미지');
      }
    }
  };

  const onClickUploadButton = async () => {
    if (isError) {
      openToast('필수 정보들을 기입해주세요 !', 'error');
    } else {
      setIsUploadButtonClicked(true);
    }
  };

  const onClickPopupUploadButton = async () => {
    let postContent;
    const text = editorRef.current?.getInstance().getHTML();

    postContent = {
      thumbnail: thumbnailUploadUrl,
      title: title,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      contribution: contribution,
      task: task,
      tools: toolsList.toString(),
      partTag: type.toString(),
      actTag: act.toString(),
      contents: text,
    };

    const { postId, status } = await postPosts(postContent);

    if (status === 200) {
      openToast('글 작성이 완료됐어요!', 'success');
    } else if (status !== 200) {
      openToast('글 작성에 실패했어요.', 'error');
    }

    if (postId) {
      router.push({ pathname: `/post/${postId}` });
    }
  };

  return (
    <>
      {isUploadButtonClicked && (
        <ConfirmationPopUp
          handleUploadButtonClick={onClickPopupUploadButton}
          handleCancelButtonClick={() => {
            setIsUploadButtonClicked(false);
          }}
        />
      )}
      <Column gap="20px" alignItems="flex-end" style={{ paddingBottom: '60px' }}>
        <EditorWrapper>
          <Editor
            ref={editorRef}
            placeholder="내용을 입력해주세요."
            previewStyle="vertical" // 미리보기 스타일 지정
            height="520px" // 에디터 창 높이
            // initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'image', 'link'],
              ['code', 'codeblock'],
              ['scrollSync'],
            ]}
            autofocus
            theme={''}
            hideModeSwitch={true}
            hooks={{
              addImageBlobHook: onUploadImage,
            }}
          />
        </EditorWrapper>
        <Button type="medium" color="mint" content="업로드하기" onClick={onClickUploadButton} />
        <Toast varient={toastType} />
      </Column>
    </>
  );
};

export default TextEditor;

const EditorWrapper = styled.div`
  width: 1200px;
  background-color: aliceblue;
  border-radius: 4px;

  .toastui-editor-toolbar {
    height: 45px;
  }

  .toastui-editor-main-container {
    background-color: white;
    /* font: Pretendard;
    font-size: 140px; */
  }

  & .ProseMirror {
    font: Pretendard;
    font-size: 18px;
  }
  & .toastui-editor-contents {
    font: Pretendard;
    font-size: 18px;
  }
`;
