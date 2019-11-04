import styled from "@emotion/styled/macro";
import { mediaMd } from "../../../utils/css.utils";
import { Input } from "../../../ui-kit/Input/Input.component";
import React, { FC } from "react";

// #region styled
const StyledInput = styled(Input)`
  width: 100%;
  height: 44px;
`;

const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  height: 100%;

  ${mediaMd} {
    height: auto;
  }
`;
// #endregion

export const SearchForm: FC = () => {
  return (
  <SearchFormStyled>
    <StyledInput placeholder='Поиск игр...  '/>
  </SearchFormStyled>);
} 
