import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem, Button } from './ContactItem.styled';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  function removeContact(id) {
    dispatch(deleteContact(id));    
  }

  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => removeContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
