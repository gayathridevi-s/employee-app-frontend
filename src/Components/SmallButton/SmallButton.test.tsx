import SmallButton, { SmallButtonPropsTypes } from './SmallButton';
import { render, screen } from '@testing-library/react';
describe('If Button works properly', () => {
  test('If color rendered correctly', () => {
    const SmallButtonProps: SmallButtonPropsTypes = {
      label: 'Button',
      color: 'blue'
    };

    render(<SmallButton {...SmallButtonProps} />);
    const element = screen.getByTestId('smallbutton-test');

    expect(element.getAttribute('class')).toBe('button blue-button');
  });
});
