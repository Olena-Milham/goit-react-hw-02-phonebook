import { Item } from './Item/Item';
import PropTypes from 'prop-types';

export const ContactList = ({ options, onDeleteContact }) => (
  <ul options={options}>
    {options.map(item => (
      <Item item={item} key={item.id} onDeleteContact={onDeleteContact} />
    ))}
    ;
  </ul>
);

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
