import styled from '@emotion/styled';
import Link from 'next/link';
import { WHITE } from '@constants/colors';

function HeaderPage() {
  return (
    <Header>
      <HeaderBar>
        <Link href="/">
          <a>
            <span className="sr-only">로고이름</span>
            <ImgLogo alt="로고이름" src="/fonts/산돌스웨거Text2.png" />
          </a>
        </Link>
        <ListMenu>
          <ItemMenu>상세정보</ItemMenu>
          <ItemMenu>링크1</ItemMenu>
          <ItemMenu>링크2</ItemMenu>
          <ItemMenu>링크3</ItemMenu>
        </ListMenu>
      </HeaderBar>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid #ddd;
  background-color: ${WHITE};
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const ImgLogo = styled.img`
  display: inline-block;
  padding: 5px 0;
  width: 150px;

  vertical-align: text-bottom;
`;

const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ItemMenu = styled.li`
  position: relative;
  margin-left: 30px;
  color: #757575;
  font-size: 15px;
  font-weight: 700;
  &:not(:first-of-type) {
    &::before {
      position: absolute;
      top: 50%;
      left: -13px;
      width: 1px;
      height: 12px;
      background-color: #656a71;
      transform: translateY(-50%);
      content: '';
    }
  }
`;

export default HeaderPage;
