import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('should render correctly', () => {
    const renderedComponent = renderer.create(<App />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});