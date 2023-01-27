import React from 'react';

const ShoppingListItem = ({
  item,
  onUpdateItem,
  onDeleteItem,
}) => {
  const [updatedItem, setUpdatedItem] = React.useState({
    ...item,
  });

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="item_name"
          value={updatedItem.item_name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          value={updatedItem.quantity}
          onChange={handleChange}
        />
      </form>
      <span>
        {item.item_name}: {item.quantity}
      </span>
      <br />
      <button
        data-testid={'update-shopping-item-$item.id}'}
        onClick={() => onUpdateItem(updatedItem)}
      >
        Update
      </button>
      <br />
      <button
        data-testid={`delete-shopping-item-${item.id}`}
        onClick={() => onDeleteItem(item)}
      >
        Delete
      </button>
    </div>
  );
};

export default ShoppingListItem;
