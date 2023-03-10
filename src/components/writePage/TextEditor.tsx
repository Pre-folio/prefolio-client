import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import styled from 'styled-components';
import { Column, Flex } from '../common/Wrapper';
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

import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';
import { getCookie } from '../../utils/cookie';

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
    const slicedUrl = url.slice(0, url.indexOf('?x-amz'));
    if (url) {
      // presigned url??? ?????? ????????? ??? url ??????.
      const statusCode = await uploadFile({ url, file });
      if (statusCode === 200) {
        setImageUrl(slicedUrl);
        callback(slicedUrl, '?????????');
      }
    }
  };

  const onClickUploadButton = async () => {
    if (isError) {
      openToast('?????? ???????????? ?????????????????? !', 'error');
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

    const { postId, status } = await postPosts(getCookie(), postContent);

    if (status === 200) {
      openToast('??? ????????? ???????????????!', 'success');
    } else if (status !== 200) {
      openToast('??? ????????? ???????????????.', 'error');
    }

    if (postId) {
      router.push({ pathname: `/post/${postId}` });
    }
  };

  return (
    <>
      {isUploadButtonClicked && (
        <ConfirmationPopUp
          // style={{ position: 'absolute', top: '50%' }}
          handleUploadButtonClick={onClickPopupUploadButton}
          handleCancelButtonClick={() => {
            setIsUploadButtonClicked(false);
          }}
        />
      )}
      <Column
        gap='20px'
        alignItems='flex-end'
        style={{ paddingBottom: '60px' }}
      >
        <EditorWrapper>
          <Editor
            ref={editorRef}
            placeholder='????????? ??????????????????.'
            previewStyle='vertical' // ???????????? ????????? ??????
            height='520px' // ????????? ??? ??????
            // initialEditType="wysiwyg" // ?????? ???????????? ??????(????????? markdown)
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
            plugins={[
              chart,
              codeSyntaxHighlight,
              colorSyntax,
              tableMergedCell,
              uml,
            ]}
          />
        </EditorWrapper>
        <Button
          type='medium'
          color='mint'
          content='???????????????'
          onClick={onClickUploadButton}
        />
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
