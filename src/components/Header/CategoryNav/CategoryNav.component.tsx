import React, {memo, FC, useState} from 'react';
import styled from '@emotion/styled';
import { mediaMd, linkReset, transition, linkColor } from '../../../utils/css.utils';
import HeaderData from '../HeaderData';
import { Icon } from '../../Icon/Icon.component';
import { Container } from '../../../ui-kit/container/Container.component';

const NavStyled = styled.nav`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  flex-wrap: wrap;

  ${mediaMd} {
    display: flex;
  }
`;

const CategoryItemStyled = styled.a`
  ${linkReset};
  ${transition('all')};
  ${linkColor('#000000')};

  width: ${100 / HeaderData.categories.length}%;
  text-align: center;
  font-size: 39px;
  padding: 15px 0;

  &:hover {
    background: #ffc608; 
  }
`;

const CategoryItemImageStyled = styled.div`
  position: relative;
  line-height: 60px;
  font-size: 25px;
  width: 100%;
`;

const CategoryItemTextStyled = styled.div`
  font-size: 11px;
  position: relative;
  text-transform: uppercase;
`;

const NavWrapperStyled = styled.div`
  background: #f1f1f1;
  margin-top: 15px;
  display: none;

  ${mediaMd} {
    display: block;
  }
`;

const catNameToUnicode = (catName: string): string => {
  const cat = HeaderData.categories.find((el) => el.catName === catName)
  return cat ? cat.unicode : HeaderData.defaultCategory.unicode;
}

interface CategoryItemProps {
  catName: string;
  displayName: string;
  className?: string;
}

const CategoryItem: FC<CategoryItemProps> = memo(({className, catName, displayName}) => {
  return (
    <CategoryItemStyled className={className} href={'/'+catName}>
      <CategoryItemImageStyled>
        <Icon unicodeChar={catNameToUnicode(catName)}/>
      </CategoryItemImageStyled>
      <CategoryItemTextStyled>{displayName}</CategoryItemTextStyled>
    </CategoryItemStyled>
  )  
});

export const CategoryNav: FC = () => {
  return (
    <NavWrapperStyled>  
      <Container>
        <NavStyled>
          {HeaderData.categories.map((data) => {
            return <CategoryItem catName={data.catName} displayName={data.displayName} key={data.catName}/>
          })}
        </NavStyled>
      </Container>
    </NavWrapperStyled>);
}