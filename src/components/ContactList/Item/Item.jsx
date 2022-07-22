

export const Item = ({item,  onDeleteContact}) =>(
    <li > 
 <span>Name:{item.name} </span>
 <span>Number:{item.number} </span>
 <button type="button" onClick={() => onDeleteContact(item.id)}>
    Delete
</button>
  </li>
)