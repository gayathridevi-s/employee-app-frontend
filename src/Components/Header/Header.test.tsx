import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders logo image', () => {
    render(<Header />);

    const logoImage = screen.getByAltText('kv-image');

    expect(logoImage).toBeTruthy();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
