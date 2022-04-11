import styled from '@emotion/styled';
import Link from 'next/link';
import { WHITE } from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';

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
  position: sticky;
  top: 0;
  z-index: 30;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: ${WHITE};
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${pxToRem(1140)};
  margin: 0 auto;
`;

const ImgLogo = styled.img`
  display: inline-block;
  width: ${pxToRem(150)};
  padding: ${pxToRem(5)} 0;
  vertical-align: text-bottom;
`;

const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ItemMenu = styled.li`
  position: relative;
  margin-left: ${pxToRem(30)};
  color: #757575;
  font-size: ${pxToRem(15)};
  font-weight: 700;
  &:not(:first-of-type) {
    &::before {
      position: absolute;
      top: 50%;
      left: -${pxToRem(13)};
      width: 1px;
      height: ${pxToRem(12)};
      background-color: #656a71;
      transform: translateY(-50%);
      content: '';
    }
  }
`;

export default HeaderPage;
