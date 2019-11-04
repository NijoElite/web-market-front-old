import React, {Component} from 'react';
import {Header} from './components/Header/Header.component';
import { GameCard } from './components/GameCard/GameCard.component';
import { Game } from './models/Interfaces';
import { Catalog } from './components/Catalog/Catalog.component';
import { Container } from './ui-kit/container/Container.component';
import styled from '@emotion/styled/macro';
import { mediaMd } from './utils/css.utils';

const mockData: Game = {
  name: 'Game Of Year',
  article: '123',
  imgUrl: 'https://cdn.gabestore.ru/product/370x460_7JGDxDgU4NZUu_vqCqVMPF4VNWMG8BrB.jpg',
  description: 'fdghsftjsrj',
  price: 500,
}

const games = new Array(20).fill(mockData);

const Page = styled.div`
  padding-top: 65px;

  ${mediaMd} {
    padding-top: 30px;
  }
`;

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Page>
          <Container>
            <Catalog games={games}/>
          </Container>
        </Page>

      </React.Fragment>
    );
  }
}
