import React, {memo, FC} from 'react';
import styled from '@emotion/styled/macro';
import { mediaMd, linkReset, transition, linkColor } from '../../../utils/css.utils';
import {navCategoriesData} from '../HeaderData';
import { Icon } from '../../../ui-kit/Icon/Icon.component';
import { Container } from '../../../ui-kit/Container/Container.component';

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

  width: ${100 / navCategoriesData.categories.length}%;
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
  const cat = navCategoriesData.categories.find((el) => el.catName === catName)
  return cat ? cat.unicode : navCategoriesData.defaultCategory.unicode;
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
          {navCategoriesData.categories.map((data) => {
            return <CategoryItem catName={data.catName} displayName={data.displayName} key={data.catName}/>
          })}
        </NavStyled>
      </Container>
    </NavWrapperStyled>);
}