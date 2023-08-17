import { render, screen, fireEvent } from '@testing-library/react';
import Input, { InputPropsTypes } from './Input';

describe('Input Component', () => {
  test('renders label and placeholder correctly', () => {
    const props: InputPropsTypes = {
      value: '',
      onChange: () => {},
      label: 'Username',
      placeholder: 'Username',
      type: 'text'
    };

    render(<Input {...props} />);

    const labelElement = screen.getByText('Username');
    const inputElement = screen.getByPlaceholderText('Username');

    expect(labelElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  test('updates value on input change', () => {
    let inputValue = '';
    const handleChange = (newValue) => {
      inputValue = newValue;
    };

    const props: InputPropsTypes = {
      value: inputValue,
      onChange: handleChange,
      label: 'Username',
      placeholder: 'Username',
      type: 'text'
    };

    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText('Username');

    fireEvent.change(inputElement, { target: { value: 'newusername' } });

    expect(inputValue).toBe('newusername');
  });

  test('matches snapshot', () => {
    const props: InputPropsTypes = {
      value: '',
      onChange: () => {},
      label: 'Username',
      placeholder: 'Enter your username',
      type: 'text'
    };

    const { asFragment } = render(<Input {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
