import { ChangeEvent } from 'react';

export const getBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });

export const onSelectFiles = async (e: ChangeEvent<HTMLInputElement>) => {
  const tempFileList: { fileName: string; base64String: string }[] = [];
  await Promise.all(
    [].map.call(e.target.files, async (file: File) => {
      tempFileList.push({
        fileName: file.name,
        base64String:
          file.type.indexOf('image') > -1 ? await getBase64(file) : '',
      });
    })
  );

  return tempFileList[0].base64String;
};

// https://time-is-life.fun/react-typescript-blob-file-to-base64-using-filereader-readasdataurl/
