import React, {memo, FC} from 'react';
import styled from '@emotion/styled/macro';
import {Container} from '../../ui-kit/Container/Container.component';
import {linkReset, linkColor, mediaMd} from '../../utils/css.utils';
import { MobileHeader } from './MobileHeader/MobileHeader.component';
import { CategoryNav } from './CategoriesNav/CategoriesNav.component';
import { SearchForm } from './SearchForm/SearchForm.component';
import {desktopNavData} from './HeaderData';

// #region styled
const HeaderStyled = styled.header`
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  
  ${mediaMd} {
    padding-top: 15px;
    position: relative;

  }
`;

const TopHeader = styled.div`
  display: flex;
  height: 65px;

  ${mediaMd} {
    height: 130px;
  }
`;

const LogoStyled = styled.a`
  ${linkReset}
  height: 100%; 
  padding: 5px 15px;
  max-height: 130px;

  & img {
    max-height: 100%;
  }
`;

const NavColumnStyled = styled.div`
  width: 100%;
  padding: 0 15px;
`;

const NavListStyled = styled.ul`
  list-style-type: none;
  display: none;
  justify-content: flex-end;

  & li:not(:first-child) {
    margin-left: 30px;
  }

  ${mediaMd} {
    display: flex;
  }
`; 

const LinkStyled = styled.a`
  ${linkColor('#000')}
  text-decoration: none;
  font-size: 14px;
`;
// #endregion

const Logo: FC = () => {
  return (
    <LogoStyled href='/'>
      <img src='/img/logo.png' alt=''/>
    </LogoStyled>
  );
}

interface LinkProps {
  href: string;
  text: string;
  className?: string;
}

const Link: FC<LinkProps> = ({href, text, className}) => {
  return (
    <li>
      <LinkStyled className={className} href={href}>{text}</LinkStyled>
    </li>
  );
}

const Links: FC = () => {
  return (
    <NavListStyled>
      {desktopNavData.map((el) => <Link href={el.link} text={el.text}/>)}
    </NavListStyled>
  );
};

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(({className}) => {
  return (
    <HeaderStyled className={className}>
      <Container> 
        <TopHeader>
          <MobileHeader/>
          <Logo/>
          
          <NavColumnStyled>
            <Links/>
            <SearchForm/>
          </NavColumnStyled>
        </TopHeader>
      </Container>
      <CategoryNav/>
    </HeaderStyled>
  );
});