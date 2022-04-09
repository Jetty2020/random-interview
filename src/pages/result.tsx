import { NextPage } from 'next';

const Result: NextPage = () => {
  const downloadRecording = async () => {
    const RECORDING = JSON.parse(localStorage.getItem('recorded-interview'));
    const BLOB = await (await fetch(RECORDING.audioBlob)).blob();
    const DOWNLOAD = document.createElement('a');
    DOWNLOAD.download = `Recording – ${RECORDING.name}`;
    DOWNLOAD.href = URL.createObjectURL(BLOB);
    document.body.appendChild(DOWNLOAD);
    DOWNLOAD.click();
    DOWNLOAD.remove();
  };

  return (
    <button type="button" onClick={downloadRecording}>
      다운로드
    </button>
  );
};

export default Result;
