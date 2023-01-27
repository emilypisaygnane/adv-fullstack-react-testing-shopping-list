import { render, screen } from '@testing-library/react';

import ShoppingLists from './ShoppingLists';

describe('Shopping Lists', () => {
  it('renders a list of shopping lists', () => {
    const time = new Date().getTime().toString();
    const shoppingLists = [
      {
        id: 1,
        name: 'test 1',
        shoppingItems: [
          { id: 1, created_at: time, name: 'test item 1' },
          { id: 2, created_at: time, name: 'test item 2' },
          { id: 3, created_at: time, name: 'test item 3' },
        ],
      },
    ];

    render(<ShoppingLists shoppingLists={shoppingLists} />);

    const shoppingListsList = screen.getByTestId('shopping-lists');
    expect(shoppingListsList).toBeInTheDocument();
    expect(shoppingListsList.children.length).toBe(1);
  });
});

