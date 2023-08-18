import Button, { ButtonPropsTypes } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
describe('If Button works properly', () => {
  test('If label rendered correctly', () => {
    const ButtonProps: ButtonPropsTypes = {
      label: 'Button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.innerHTML).toBe('Button');
  });
  test('if onclick is triggered', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropsTypes = {
      label: 'Button',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });
  test('if snapshot rendered', () => {
    const ButtonProps: ButtonPropsTypes = {
      label: 'Button'
    };

    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });
});
