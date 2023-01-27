import { fireEvent, render, screen } from '@testing-library/react';

import ShoppingListItem from './ShoppingListItem';

describe('Shopping List Item', () => {
  const shoppingItem = {
    id: 1,
    item_name: 'test item',
    quantity: 1,
  };

  it('update button updates shopping item', () => {
    const onUpdateShoppingItem = jest.fn();
    render(
      <ShoppingListItem
        shoppingItem={shoppingItem}
        onUpdateShoppingItem={onUpdateShoppingItem}
      />
    );
    const updateButton = screen.getByTestId('update-shopping-item-1');
    fireEvent.click(updateButton);
    expect(onUpdateShoppingItem).toHaveBeenCalledWith(
      shoppingItem
    );
  });

  it('delete button deletes shopping item', () => {
    const onDeleteShoppingItem = jest.fn();
    render(
      <ShoppingListItem
        shoppingItem={shoppingItem}
        onDeleteShoppingItem={onDeleteShoppingItem}
      />
    );
    const deleteButton = screen.getByTestId('delete-shopping-item-1');
    fireEvent.click(deleteButton);
    expect(onDeleteShoppingItem).toHaveBeenCalledWith(
      shoppingItem
    );
  });
});
