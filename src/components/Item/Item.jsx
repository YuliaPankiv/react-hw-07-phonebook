import { SlUserUnfollow } from 'react-icons/sl';
import { Delete } from 'components/contactList/ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/options';
import { TodoWrapper } from './Item.styled';
// import { deleteContact, editContact } from '../../redux/options';
// import { DeleteButton, EditButton, TodoWrapper } from './Item.styled';
// import { RiEdit2Line } from 'react-icons/ri';

export const ItemContact = ({ currentContact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <TodoWrapper>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
      <div>
        {/* <EditButton type="button" onClick={() => dispatch(editContact(id))}>
          <RiEdit2Line size={20} />
        </EditButton> */}
        <Delete onClick={() => dispatch(deleteContact(id))}>
          <SlUserUnfollow />
        </Delete>
      </div>
    </TodoWrapper>
  );
};
