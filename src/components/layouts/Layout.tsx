import React from 'react';
import FooterPage from './FooterPage';
import HeaderPage from './HeaderPage';

interface ChildProps {
  children: React.ReactNode;
}
function Layout({ children }: ChildProps) {
  return (
    <>
      <HeaderPage />
      <main>{children}</main>
      {/* <FooterPage /> */}
    </>
  );
}

export default Layout;
