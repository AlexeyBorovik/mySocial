import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import MyReactApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MyReactApp />, div);
  unmountComponentAtNode(div)
});