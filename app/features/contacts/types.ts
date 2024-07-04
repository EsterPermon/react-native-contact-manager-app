export type Contact = {
  id: string;
  firstName: string;
  phoneNumber: string;
  email?: string;
  lastName?: string;
  photoUri?: string;
};

export type Contacts = Record<string, Contact>;

export type ContactsGroupedByLetter = Record<string, Contact[]>;

export type ContactsSectionList = { title: string; data: Contact[] }[];
