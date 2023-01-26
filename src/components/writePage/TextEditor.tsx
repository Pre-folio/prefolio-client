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

type HookCallback = (url: string, text?: string) => void;

const TextEditor = ({
  thumbnailUploadUrl,
  title,
  startDate,
  endDate,
  contribution,
  task,
  toolsList,
  tags,
}: any) => {
  const router = useRouter();
  const editorRef = useRef<Editor>(null);
  const [imageUrl, setImageUrl] = useState('');

  const onUploadImage = async (file: any, callback: HookCallback) => {
    const url = await getPresignedUrl('IMAGE');
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
    let postContent;
    const text = editorRef.current?.getInstance().getHTML();

    const partTagList = tags.filter(
      (tag: any) => tag === 'dev' || tag === 'design' || tag === 'plan'
    );
    const actTageList = tags.filter(
      (tag: any) => tag === 'society' || tag === 'intern' || tag === 'project'
    );

    postContent = {
      thumbnail: thumbnailUploadUrl,
      title: title,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      contribution: contribution,
      task: task,
      tools: toolsList.toString(),
      partTag: partTagList.toString(),
      actTag: actTageList.toString(),
      contents: text,
    };

    const postId = await postPosts(postContent);
    console.log(postId);

    if (postId) {
      router.push({ pathname: `/post/${postId}` });
      //페이지 이동
    }
  };

  return (
    <Column gap='20px' alignItems='flex-end'>
      <EditorWrapper>
        <Editor
          ref={editorRef}
          placeholder='내용을 입력해주세요.'
          previewStyle='vertical' // 미리보기 스타일 지정
          height='520px' // 에디터 창 높이
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
      <Button
        type='medium'
        color='mint'
        content='업로드하기'
        onClick={onClickUploadButton}
      />
    </Column>
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
