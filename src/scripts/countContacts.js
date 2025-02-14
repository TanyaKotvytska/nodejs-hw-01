import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw error;
  }
};

const displayContactCount = async () => {
  const count = await countContacts();
  console.log(`Total contacts: ${count}`);
};

displayContactCount();
