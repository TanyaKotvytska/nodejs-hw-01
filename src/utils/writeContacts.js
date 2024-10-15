import { promises as fs } from 'fs';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const filePath = path.resolve(PATH_DB);

    const data = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(filePath, data, 'utf-8');

    console.log('Contacts successfully written to file.');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
