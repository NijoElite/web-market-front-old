import React, {Component, FC} from 'react';
import {Header} from './components/Header/Header.component';
import { Game } from './models/interfaces';
import { Catalog } from './components/Catalog/Catalog.component';
import { Container } from './ui-kit/Container/Container.component';
import styled from '@emotion/styled/macro';
import { mediaMd } from './utils/css.utils';
import { Carousel } from './ui-kit/Carousel/Carousel.component';

const mockData: Game = {
  name: 'Game Of Year',
  article: '123',
  imgUrl: 'https://cdn.gabestore.ru/product/370x460_7JGDxDgU4NZUu_vqCqVMPF4VNWMG8BrB.jpg',
  description: 'fdghsftjsrj',
  price: 500,
}

const games = [mockData];

const Page = styled.div`
  padding-top: 65px;

  ${mediaMd} {
    padding-top: 0;
  }
`;
const mockCarousel = ['https://cdn.gabestore.ru/category/yZX_l6hOvLAz_3TnSUk5jLr03hcObcAB.jpg','https://cdn.gabestore.ru/category/yZX_l6hOvLAz_3TnSUk5jLr03hcObcAB.jpg','https://cdn.gabestore.ru/category/yZX_l6hOvLAz_3TnSUk5jLr03hcObcAB.jpg', 'https://cdn.gabestore.ru/category/0qGrBrlPS12ri3PW2DayeHhT2GmNPhT4.jpg'];

const CarouselStyled = styled(Carousel)`
  width: 100%;
  height: 500px;
`;

const Background = styled('div')<{imgUrl: string}>`
  background-image: url(${({imgUrl}): string => imgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Item: FC = () => <div>ghderfhsetrjsj</div>;


export default class App extends Component {

  render() {
    const items = mockCarousel.map(el => {
      return {
        item: <Item/>,
        background: <Background imgUrl={el}/>,
      }
     });

    return (
      <React.Fragment>
        <Header></Header>
        <Page>
          <CarouselStyled items={items} options={{delay: 8500}} />

          <Container>
            <Catalog games={games}/>
          </Container>
        </Page>

      </React.Fragment>
    );
  }
}
