import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useDeleteContactMutation } from "../../services/contactApi";
import { actions } from '../../redux/contacts';
import css from "./Contact.module.css";


const Item = styled.li`
  background-color: ${props => props.color && props.color};
`
const Span = styled.span`
  background-color: ${props => props.backgroundColor};
`

let backgroundColor;

const Contact = ({ id, name, number, addNameContact, optionFirstLetter }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const firstUpperLetterContact = optionFirstLetter(name);
  const dispatch = useDispatch();
  if (isDeleting) {
    toast.success(`Contact ${name} is delete!!!`);
  }

  const filterForFirstLette = () => {
    dispatch(actions.getFirstLetteName(firstUpperLetterContact.firstLetter));
  }

  const backgroundColorItem = () => {
    if (firstUpperLetterContact) {
      backgroundColor = firstUpperLetterContact.backgroundColor;
    }
    return backgroundColor
  }

  return (
    <Item color={backgroundColorItem()}
      className={`${addNameContact === name ? `${css.contact_item_add}` : `${css.contact_item_h}`} ${css.contact_item}`}>
      {firstUpperLetterContact &&
        <Span
          className={css.first_letter}
          onClick={filterForFirstLette}
          backgroundColor={firstUpperLetterContact.backgroundColor}>
            {firstUpperLetterContact.firstLetter}
        </Span>}
      <span className={`${css.contact_name} ${css.item_data}`}>{name}</span>
      <span className={`${css.contact_number} ${css.item_data}`}>{number}</span>

      <button
        className={`${isDeleting ? css.del_btn_disabled : css.del_btn_active} ${css.del_btn}`}
        onClick={() => deleteContact(id)}
        disabled={isDeleting}>
                {isDeleting ? 'Deleting....' : 'Delete'}
      </button>
    </Item>
  );
};

export default Contact;
