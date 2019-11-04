import React, { FC } from 'react';
import {Game} from '../../models/Interfaces';
import { mediaMd, mediaLg } from '../../utils/css.utils';
import styled from '@emotion/styled/macro';
import { GameCard } from '../GameCard/GameCard.component';

// #region styled
const CatalogStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GameCardStyled = styled(GameCard)`
  width: 50%;
  border: 10px solid transparent;

  ${mediaMd} {
    width: 25%;
  }

  ${mediaLg} {
    width: 20%;
  }
`;
// #endregion

interface CatalogProps {
  games: Game[];
}

export const Catalog: FC<CatalogProps> = ({games}) => {
  return (
    <CatalogStyled>
      {games.map(game => <GameCardStyled game={game}/>)}
    </CatalogStyled>
  );
}
