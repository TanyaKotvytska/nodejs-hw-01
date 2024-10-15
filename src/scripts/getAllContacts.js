import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    throw error;
  }
};

const displayContacts = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

displayContacts();
