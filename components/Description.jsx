import React from 'react';
import { Tile } from '@rneui/themed';
import { useWindowDimensions } from 'react-native';

const Description = () => {
    const window = useWindowDimensions();
    return(
        <Tile
            imageSrc={require('../assets/images/description.jpg')}
            title="Experimente a tranquilidade rústica de uma fazenda! Rodeada por hectares de floresta verdejante, nosso Hotel Fazenda é o lugar perfeito para fugir da agitação da vida da cidade! De passeios a cavalo à pesca, há muito o que fazer em nossa extensa propriedade. Nossa equipe calorosa e amigável é dedicada a tornar a sua estadia memorável! Então venha aproveitar tudo o que o nosso Hotel Fazenda tem a oferecer!"
            titleStyle={{ fontSize: 24, color: '#fff' }}
            featured
            activeOpacity={0}
            width={window.width}
            height={500}
        />
    ); 
};

export default Description;