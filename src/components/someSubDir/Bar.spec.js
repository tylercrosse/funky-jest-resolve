import React from 'react';
import renderer from 'react-test-renderer';
import Bar from './Bar';

describe('<Bar />', () => {
  it('should render correctly', () => {
    const renderedComponent = renderer.create(<Bar />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
