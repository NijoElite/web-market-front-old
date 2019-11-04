import React, { FC, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Burger } from '../Burger/Burger.component';
import { linkColor, mediaMd, transition } from '../../../utils/css.utils';

// #region styled
const HeaderStyled = styled('div')<{open: boolean}>`
  ${transition('all')}
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffc608;
  padding: 15px;
  z-index: 1000;

  visibility: ${({open}): string => open ? 'visible' : 'hidden'};
  opacity: ${({open}): string => open ? '1' : '0'};
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const MobileHeaderStyled = styled.div`
  ${mediaMd} {
    display: none;
  }
`;

const ListStyled = styled.ul`
  margin: 0 70px 0 0;
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 30px
  }
`;

const ListItemStyled = styled.li`
  list-style-type: none;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 0;

  & a {
    ${linkColor('#000')}
    text-decoration: none;
    padding: 10px 0;
  }
`;

const BurgerStyled = styled(Burger)`
  height: 65px;
  width: 65px;
  background: #ffc608;
  line-height: 65px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
`;
// #endregion

const dataLinks = [
  [
    {text: 'Войти', link: '/login'},
    {text: 'Регистрация', link: '/register'},
    {text: 'Мои покупки', link: '/cart'},
  ],
  [
    {text: 'Каталог игр', link: '/catalog'},
    {text: 'Новинки', link: '/newgames'},
    {text: 'Лидеры продаж', link: '/top'},
  ],
];

export const MobileHeader: FC = () => {
  const [open, setOpen] = useState(false);

  const items = dataLinks.map((list) => {
    return (
    <ListStyled>
      {list.map((item) => 
      <ListItemStyled key={item.link}>
        <a href={item.link}>{item.text}</a>
      </ListItemStyled>)}
    </ListStyled>)
  });

  return (
    <MobileHeaderStyled>
      <BurgerStyled open={open} setOpen={setOpen}/>
      <HeaderStyled open={open}>
        {items}
      </HeaderStyled>
    </MobileHeaderStyled>
  );
};

