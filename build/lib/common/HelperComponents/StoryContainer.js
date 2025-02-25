var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components/native';
import { ContainerRow, ContainerWithTheme, TextWithTheme } from './ThemeHelper.styles';
export const StoryContainer = (_a) => {
    var { children, title } = _a, props = __rest(_a, ["children", "title"]);
    return (<Container>
    <Title>{title}</Title>
    <ContainerRow {...props}>
      {children}
    </ContainerRow>
  </Container>);
};
export const VerticalStoryContainer = ({ children, title }) => {
    const verticalStyle = { alignItems: 'flex-start', flexDirection: 'column' };
    return <StoryContainer {...{ children, title }} style={verticalStyle}/>;
};
export const StoryWrapper = ({ children, title = '' }) => (<Wrapper>
    <Title>{title}</Title>
    <Content>
      {children}
    </Content>
  </Wrapper>);
export const Separator = styled.View(() => ({
    marginTop: 16
}));
const Container = styled(ContainerWithTheme) `
  max-width: 600px;
  padding: 16px;
`;
const Wrapper = styled.View `
  padding: 16px;
`;
const Content = styled.View ``;
const Title = styled(TextWithTheme) `
  margin-bottom: 8px;
`;
//# sourceMappingURL=StoryContainer.js.map