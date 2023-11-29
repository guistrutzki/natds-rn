import React from 'react';
import { View } from 'react-native';
import { TokenContainer, TokenColorContainer, ActualColor, ColorName, CategoryTitle, CategoryWrapper, Container } from './TokenMosaic.styles';
const buildMosaic = (data, itemRenderer) => Object
    .keys(data)
    .map((key) => itemRenderer(key, data));
const Category = ({ category, data, itemRenderer }) => (<CategoryWrapper>
    <CategoryTitle>{category}</CategoryTitle>
    <TokenContainer>
      {buildMosaic(data, itemRenderer)}
    </TokenContainer>
  </CategoryWrapper>);
const buildCategories = (categories, itemRenderer) => Object
    .keys(categories)
    .map((category) => (<Category key={category} category={category} data={categories[category]} itemRenderer={itemRenderer}/>));
export const TokenMosaicWithCategories = ({ categories, itemRenderer }) => (<Container>
    {buildCategories(categories, itemRenderer)}
  </Container>);
export const TokenMosaic = ({ data, itemRenderer }) => (<Container>
    <TokenContainer>
      {buildMosaic(data, itemRenderer)}
    </TokenContainer>
  </Container>);
export const TokenColor = ({ colorName, color }) => (<TokenColorContainer>
    <ActualColor style={{ backgroundColor: color }}/>
    <View>
      <ColorName>{colorName}</ColorName>
      <ColorName style={{ color: '#bbbbbb' }}>{color}</ColorName>
    </View>
  </TokenColorContainer>);
//# sourceMappingURL=TokenMosaic.js.map