import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import 'jest-styled-components/native';

import { NatContainer } from './NatContainer';

describe('Container component', () => {
  it('Should render container component correctly', () => {
    const container = renderer.create(
      <NatContainer>
        <Text>Hello</Text>
      </NatContainer>,
    ).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('Should render container component with default styling', () => {
    const container = renderer.create(
      <NatContainer>
        <Text>Hello</Text>
      </NatContainer>,
    ).toJSON();
    expect(container).toHaveStyleRule('background-color', 'white');
  });

  it('Should render container component with custom styling', () => {
    const container = renderer.create(
      <NatContainer color="red" center>
        <Text>Hello</Text>
      </NatContainer>,
    ).toJSON();
    expect(container).toHaveStyleRule('background-color', 'red');
    expect(container).toHaveStyleRule('justify-content', 'center');
    expect(container).toHaveStyleRule('align-items', 'center');
  });
});