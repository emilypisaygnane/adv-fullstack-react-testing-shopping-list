import { fireEvent, render, screen } from '@testing-library/react';

import ShoppingListItemForm from './ShoppingListItemForm';

describe('Shopping List Item Form', () => {
  it('renders a form', () => {
    render(<ShoppingListItemForm id="test" />);
    const form = screen.getByTestId('new-shopping-item-test');
    expect(form).toBeInTheDocument();
  });

  it('renders a name input', () => {
    render(<ShoppingListItemForm id="test" />);
    const nameInput = screen.getByTestId(
      'new-shopping-item-name-test'
    );
    expect(nameInput).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'test item' } });
    expect(nameInput.value).toBe('test item');
  });

  it('submits form with shopping item on button click', () => {
    const defaultShoppingItem = {
      id: null,
      item_name: 'test item',
      quantity: 0,
      done: false,
    };

    const onSubmit = jest.fn();
    render(<ShoppingListItemForm id="test" onSubmit={onSubmit} />);
    const nameInput = screen.getByTestId(
      'new-shopping-item-name-test'
    );
    fireEvent.change(nameInput, { target: { value: 'test item' } });
    const quantityInput = screen.getByTestId(
      'new-shopping-item-quantity-test'
    );
    fireEvent.change(quantityInput, {
      target: {
        value: 0,
      },
    });
    const button = screen.getByTestId(
      'shopping-item-form-submit-button-test'
    );
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledWith(defaultShoppingItem);
  });
});
