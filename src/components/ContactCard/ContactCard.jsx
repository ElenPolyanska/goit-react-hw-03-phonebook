import PropTypes from 'prop-types';
import { Button, Item } from './ContactCard.styled';

export const ContactCard = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <Item>
      <span>{name}: </span>
      <span>{number} </span>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Item>
  );
};

ContactCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
