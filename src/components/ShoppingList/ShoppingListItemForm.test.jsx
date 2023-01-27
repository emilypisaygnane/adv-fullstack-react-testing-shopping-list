import { useState } from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingListItemForm = ({ onSubmit }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    item_name: '',
    quantity: 1,
  });
  const [editingId, setEditingId] = useState(null);

  const handleUpdateShoppingItem = (updatedItem) => {
    setItems((prevItems) => 
      prevItems.map((item) => {
        item.id === updatedItem.id
          ? updatedItem 
          : item;
      })
    );
    setEditingId(null);
  };

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  return ( 
    <div>
      <form
        data-testid="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(newItem);
        }}
      >
        <input
          type="text"
          name="item_name"
          value={newItem.item_name}
          onChange={handleChange}
          placeholder= "Add New Item"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
          placeholder= "Quantity"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {items.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            onUpdateItem={handleUpdateShoppingItem}
            onEditItem={handleEdit}
            editingId={editingId}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingListItemForm;
