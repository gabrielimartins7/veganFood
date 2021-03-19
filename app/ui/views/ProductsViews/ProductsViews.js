import React, {useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Appbar, Card, Button, Paragraph} from 'react-native-paper';
import { ScrollView } from 'react-native';
import {ApiService} from '../../../data/services/ApiService';
import {ProductContext} from '../../providers/ProductProvider';
import {productsResponse} from '../../../data/actions/ProductActions';
import {NumberServices} from '../../../data/services/NumberServices';

const ViewContainer = styled.SafeAreaView`
    flex: 1;
`
const ProductCart = styled(Card) `
    margin: 8px;
`

export default function ProductsViews(props) {
    const [{productList, selectedProduct}, productDispatch] = useContext(ProductContext);

    useEffect(() => {
        ApiService.get('products')
            .then(productList => productDispatch(productsResponse (productList)))
    }, [])

    return(
        <ViewContainer>
            <Appbar.Header>
                <Appbar.Content title={'Produtos'} />
            </Appbar.Header>
            <ScrollView>
                {productList.map((item) => (
                    <ProductCard key={item.id}>
                        <Card.Cover source={{uri: item.picture}} />
                        <Card.Title
                        title={item.name}
                        right={(props) => (
                            <Button onPress={() => selectProduct(item)}>Selecionar</Button>
                        )}
                        />
                        <Card.Content>
                        <Paragraph>{NumberService.currency(item.price)}</Paragraph>
                        </Card.Content>
                    </ProductCard>
                ))}
      </ScrollView>
        </ViewContainer>
    )
}