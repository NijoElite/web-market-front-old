import React, {memo, FC, useState} from 'react';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/Container.component';
import {linkReset, transition, linkColor, mediaMd} from '../../utils/css.utils';
import HeaderData from './HeaderData';
import {Icon} from '../Icon/Icon.component';
import { MobileHeader } from './MobileHeader/MobileHeader.component';
import { CategoryNav } from './CategoryNav/CategoryNav.component';

// #region styled
const HeaderStyled = styled.header`
  background: #ffffff;
  position: relative;

  ${mediaMd} {
    padding-top: 15px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 2px solid #ffc608;
  border-radius: 5px;
  padding: 5px 15px;
  height: 44px;
  outline: none;
  box-sizing: border-box;
`;

const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  height: 100%;

  ${mediaMd} {
    height: auto;
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

const linksData = [
  {text: 'Войти', link: '/login'},
  {text: 'Регистрация', link: '/register'},
  {text: 'Мои покупки', link: '/cart'},
];

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
      {linksData.map((el) => <Link href={el.link} text={el.text}/>)}
    </NavListStyled>
  );
};

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(({className}) => {
  return (
    <HeaderStyled>
      <Container>
        <TopHeader>
          <MobileHeader/>
          <Logo/>
          <NavColumnStyled>
            <Links/>
            <SearchFormStyled>
              <StyledInput placeholder='Поиск игр...  '/>
            </SearchFormStyled>
          </NavColumnStyled>
        </TopHeader>
      </Container>
      <CategoryNav/>
    </HeaderStyled>
  );
});