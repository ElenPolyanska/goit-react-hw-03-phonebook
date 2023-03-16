import { ContactCard } from 'components/ContactCard/ContactCard';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';


export const ContactList = ({ items, onDelete }) => {
    return (
        <List>
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <ContactCard item={item} onDelete={onDelete}/>
                    </li>
                )
            })}
        </List>
    )
};

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
}