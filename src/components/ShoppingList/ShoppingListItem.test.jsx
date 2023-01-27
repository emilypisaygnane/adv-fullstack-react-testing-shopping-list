import {
  fireEvent,
  render,   
} from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem';

describe('ShoppingListItem', () => {
  let updateItemMock;
  let deleteItemMock;
  let item;

  beforeEach(() => {
    updateItemMock = jest.fn();
    deleteItemMock = jest.fn();
    item = {
      id: '1',
      item_name: 'Mangoes',
    };
  });

  it.skip('renders the item name and quantity', () => {
    const { getByDisplayValue } = render(
      <ShoppingListItem
        item={item}
        onUpdateItem={updateItemMock}
        onDeleteItem={deleteItemMock}
      />
    );
    expect(getByDisplayValue('item.name')).toBeTruthy;
  });
  
  it.skip('calls the updateItemMock when the input field is changed', () => {
    const { getByDisplayValue } = render(
      <ShoppingListItem
        item={item}
        onUpdateItem={updateItemMock}
        onDeleteItem={deleteItemMock}
      />
    );

    const input = getByDisplayValue(item.name);
    fireEvent.change(input, { target: { value: 'new item name' } });
    expect(updateItemMock).toHaveBeenCalledWith(
      item.id,
      { 
        ...item,
        name: 'new item name',
      }
    );
  });

  it.skip('calls the deleteItemMock when the delete button is clicked', () => {
    const { getByText } = render(
      <ShoppingListItem
        item={item}
        onUpdateItem={updateItemMock}
        onDeleteItem={deleteItemMock}
      />
    );

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(deleteItemMock).toHaveBeenCalledWith(item.id);
  });
});
