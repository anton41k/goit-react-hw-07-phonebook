const addContact = (state, payload) => {
  const found = state.find((contact) => contact.name === payload.name);
  if (!found) {
    return [payload, ...state];
  }
  alert(`${payload.name} is already in contacts`);
  return [...state];
};

const deleteContact = (state, payload) =>
  state.filter(({ id }) => id !== payload);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact };
