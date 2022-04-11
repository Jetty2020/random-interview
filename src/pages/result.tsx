import { NextPage } from 'next';

const Result: NextPage = () => {
  const downloadRecording = async () => {
    let BLOB: Blob;
    let objectURL = '';
    // 로컬스토리지 방식
    const recording = JSON.parse(
      localStorage.getItem('recorded-interview') as string,
    );
    console.log('recording:', recording);
    BLOB = await (await fetch(recording)).blob();
    console.log('BLOB:', BLOB);
    objectURL = URL.createObjectURL(BLOB);

    // indexedDB 방식
    // const request = indexedDB.open('random-interview');
    // request.onsuccess = () => {
    //   const db = request.result;
    //   const transaction = db.transaction(['recordings'], 'readonly');
    //   const objectStore = transaction.objectStore('recordings');
    //   const response = objectStore.get('index');
    //   response.onsuccess = () => {
    //     BLOB = response.result;
    //     objectURL = URL.createObjectURL(BLOB);
    //     console.log(BLOB);
    //   };
    // };

    // 다운로드 링크 생성
    const downloadLink = document.createElement('a');
    downloadLink.download = 'recorded-interview.webm';
    console.log('objectURL:', objectURL);
    downloadLink.href = objectURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    URL.revokeObjectURL(objectURL);
    downloadLink.remove();
  };

  return (
    <button type="button" onClick={downloadRecording}>
      다운로드
    </button>
  );
};

export default Result;
