import Error404 from './404';

function Error(statusCode: number) {
  if (statusCode === 404) return <Error404 />;
  return (
    <div>
      <h2 className="sr-only">에러 페이지</h2>
      {statusCode > 510 ? (
        <p>네트워크 에러가 발생했습니다.</p>
      ) : (
        <p>에러가 발생했습니다.</p>
      )}
    </div>
  );
}

export default Error;
