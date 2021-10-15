import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

/*export async function fetchAuthors() {
  const { data } = await axios.get(`/authors?_embed=books`);
  return data;
}*/

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

/*export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}*/
