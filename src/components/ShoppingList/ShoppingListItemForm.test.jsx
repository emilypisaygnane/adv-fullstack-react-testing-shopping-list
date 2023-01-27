import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm';

describe('ShoppingListItemForm', () => {
  let onSubmitMock;

  beforeEach(() => {
    onSubmitMock = jest.fn();
    render(<ShoppingListItemForm onSubmit={onSubmitMock} />);
  });

  it('renders the form', () => {
    const form = screen.queryByTestId('form');
    expect(form).toBeInTheDocument();
  });

  it('call onSubmit when the form is submitted', () => {
    const input = screen.getByTestId('input');
    const quality = screen.getByTestId('quality');
    const submit = screen.getByTestId('submit');

    fireEvent.change(input, { target: { value: 'new item name' } });
    fireEvent.change(quality, { target: { value: '2' } });
    fireEvent.click(submit);

    expect(onSubmitMock).toHaveBeenCalledWith({
      name: 'new item name',
      quality: '2',
    });
  });
});
