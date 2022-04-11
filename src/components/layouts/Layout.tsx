import React from 'react';
import HeaderPage from './HeaderPage';

interface ChildProps {
  children: React.ReactNode;
}
function Layout({ children }: ChildProps) {
  return (
    <>
      <HeaderPage />
      <main>{children}</main>
    </>
  );
}

export default Layout;
