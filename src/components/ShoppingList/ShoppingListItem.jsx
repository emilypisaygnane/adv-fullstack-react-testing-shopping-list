export default function ShoppingListItem({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) {
  return (
    <div>
      <span>
        {shoppingItem.item_name}: {shoppingItem.quantity}
      </span>
      <br />
      <button 
        data-testid={`update-shopping-item-${shoppingItem.id}`} 
        onClick={() => onUpdateShoppingItem(shoppingItem)}>
          update
      </button>
      <br />
      <button 
        data-testid={`delete-shopping-item-${shoppingItem.id}`} 
        onClick={() => onDeleteShoppingItem(shoppingItem)}>
        delete
      </button>
    </div>
  );
}
