import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import styled from 'styled-components';
import { Column } from '../common/Wrapper';
import { Button } from '../common/Button';

type HookCallback = (url: string, text?: string) => void;

const TextEditor = () => {
  const editorRef = useRef<Editor>(null);

  const onUploadImage = async (blob: Blob | File, callback: HookCallback) => {
    console.log(blob);
  };

  const onClickUploadButton = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

  return (
    <Column gap="20px" alignItems="flex-end">
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
