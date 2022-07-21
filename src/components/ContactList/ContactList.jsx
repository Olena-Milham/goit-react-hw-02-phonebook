import { Item } from "./Item/Item";

export const ContactList = ({options})=>(

    <ul options={options}>
        {options.map(item=>(
 <Item 
 item={item}
 key={item.id}
  />
        ))}
       
    </ul>
)

// options=contacts or submit data (?)