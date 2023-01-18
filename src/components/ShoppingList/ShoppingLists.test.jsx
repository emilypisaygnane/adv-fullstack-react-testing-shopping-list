import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists', () => {
  it('renders shopping lists', () => {
    const onCreateShoppingList = jest.fn();

    const defaultShoppingList = {
      id: null,
      name: 'shopping list',
      shoppingItems: [],
    }; 

    render(<ShoppingLists onCreateShoppingList={onCreateShoppingList}
      shoppingLists={[]}
    />
    );

    const input = screen.getByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'New Shopping List' } });

    const submitButton = screen.getByTestId(
      'shopping-list-form-submit-button-test'
    );
    fireEvent.click(submitButton);

    expect(onCreateShoppingList).toHaveBeenCalledWith(defaultShoppingList);
  });
});
