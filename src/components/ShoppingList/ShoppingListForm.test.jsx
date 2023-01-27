import { 
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {

  it ('submits the form with button click', () => {
    const onSubmit = jest.fn();

    const defaultShoppingList = {
      id: null,
      name: 'shopping list',
      shoppingItems: [],
    };

    render(
      <ShoppingListForm id="test" onSubmit={onSubmit} />
    );

    const input = screen.getByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'shopping list' } });

    const submitButton = screen.getByTestId(
      'shopping-list-form-submit-button-test'
    );
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith(defaultShoppingList);
  });

  it('renders a form', () => {
    render( 
      <ShoppingListForm id="test" />
    );

    const form = screen.getByTestId('shopping-list-form-test');

    expect(form).toBeInTheDocument();
  });

  it('input works', () => {
    render(
      <ShoppingListForm id="test" />
    );

    const input = screen.getByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'testing, testing, 1, 2, 3' } });

    expect(input.value).toBe('testing, testing, 1, 2, 3');
  });
});

