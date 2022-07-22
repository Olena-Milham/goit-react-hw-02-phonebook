import { Item } from "./Item/Item";

export const ContactList = ({options, onDeleteContact})=>(

<ul options={options}>
{options.map(item=>(
 <Item 
 item={item}
 key={item.id}
 onDeleteContact={onDeleteContact}
  />
        ))};
       
    </ul>
)
