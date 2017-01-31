import React from 'react';
import renderer from 'react-test-renderer';
import Foo from './Foo';

describe('<Foo />', () => {
  it('should render correctly', () => {
    const renderedComponent = renderer.create(<Foo />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
