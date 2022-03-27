import Head from 'next/head';

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | 면대면</title>
    </Head>
  );
};

export default PageTitle;
