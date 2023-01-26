// 후의 일을 위함,,
interface encodeFileToBase64Props {
  file: any;
}

/**
 *
 * @param file - 호출 시 encodeFileToBase64({ file }) 형태로 호출 **중괄호 꼭 붙이기**
 * @returns const encodedFile = encodeFileToBase64({file}) 형태로 받으면 인코딩된 파일 받음
 */
export function encodeFileToBase64({ file }: encodeFileToBase64Props) {
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  let encodedFile;

  return new Promise((resolve) => {
    fileReader.onload = () => {
      encodedFile = fileReader.result;
      resolve(encodedFile);
    };
  });
}
