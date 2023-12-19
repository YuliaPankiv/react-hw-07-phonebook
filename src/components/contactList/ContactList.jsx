import { ItemContact } from 'components/Item/Item';
import { Item, List } from './ContactList.styled';
import { filterContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/options';

export const ContactList = () => {
  const filteredContacts = useSelector(filterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {filteredContacts && (
        <List>
          {filteredContacts &&
            filteredContacts.map(currentContact => {
              return (
                <Item key={currentContact.id}>
                  <ItemContact currentContact={currentContact} />
                </Item>
              );
            })}
        </List>
      )}
    </>
  );
};
