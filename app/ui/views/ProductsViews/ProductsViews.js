import React from 'react';
import styled from 'styled-components/native';
import {Appbar, Card, Button, Paragraph} from 'react-native-paper';
import { ScrollView } from 'react-native';

const ViewContainer = styled.SafeAreaView`
    flex: 1;
`;

export default function ProductsViews(props) {
    return(
        <ViewContainer>
            <Appbar.Header>
                <Appbar.Content title={'Produtos'} />
            </Appbar.Header>
            <ScrollView>
                <Card>
                    <Card.Cover source={{uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/139702ff92e93f29d84ebf976a5dfd8f_L.jpg'}} />
                    <Card.Title
                        title={'Salada Vegana'}
                        right={(props) => <Button>Selecionar</Button>}
                    />
                    <Card.Content>
                        <Paragraph>
                            Na salada contem: abacate, cebola roxa, manga, tomate..
                        </Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </ViewContainer>
    )
}