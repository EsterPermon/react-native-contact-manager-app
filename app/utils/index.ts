import { Contact as ExpoContact } from "expo-contacts";
import uuid from "react-native-uuid";
import {
  Contact,
  Contacts,
  ContactsGroupedByLetter,
} from "@/app/features/contacts/types";

export const PHONE_NUMBER_REGEX =
  /^(\+?[0-9]{1,3})?[\s.-]?\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4,6}$/;

export const sortByFistName = (
  a: Contact | ExpoContact,
  b: Contact | ExpoContact,
) => {
  if (!a.firstName) {
    return -1;
  }
  if (!b.firstName) {
    return 1;
  }
  return a.firstName.localeCompare(b.firstName);
};

export const groupContactsById = (data: ExpoContact[]): Contacts =>
  data.sort(sortByFistName).reduce((acc, contact) => {
    // this is necessary because property id, on Contact from expo-contact, is possibly null
    const id = contact.id || (uuid.v4() as string);
    acc[id] = {
      id,
      firstName: contact.firstName || "",
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumbers?.[0].number || "",
      email: contact.emails?.[0].email,
      photoUri: contact.image?.uri,
    };
    return acc;
  }, {} as Contacts);

export const groupContactsByLetter = (contacts: Contact[]) => {
  return contacts.reduce((acc, contact) => {
    const firstLetter = contact.firstName[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {} as ContactsGroupedByLetter);
};

export const createSectionList = (groupedContacts: ContactsGroupedByLetter) => {
  return Object.keys(groupedContacts)
    .sort()
    .map((letter) => ({
      title: letter,
      data: groupedContacts[letter],
    }));
};
