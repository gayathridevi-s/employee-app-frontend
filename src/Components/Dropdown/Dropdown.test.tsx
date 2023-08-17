import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  test('renders label and placeholder correctly', () => {
    const props = {
      value: '',
      onChange: jest.fn(),
      label: 'Select an option',
      placeholder: 'Please select',
      options: mockOptions
    };

    render(<Dropdown {...props} />);

    const labelElement = screen.getByText('Select an option');
    const placeholderOption = screen.getByText('Please select');

    expect(labelElement).toBeTruthy();
    expect(placeholderOption).toBeTruthy();
  });

  test('matches snapshot', () => {
    const props = {
      value: '',
      onChange: jest.fn(),
      label: 'Select an option',
      placeholder: 'Please select',
      options: mockOptions
    };

    const { asFragment } = render(<Dropdown {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
