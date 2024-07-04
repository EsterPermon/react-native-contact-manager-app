import type { Contact as ExpoContact } from "expo-contacts";

export const mockedContacts = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "1234567890",
    email: "john@example.com",
    photoUri: "uri1",
  },
  {
    id: "2",
    firstName: "Alice",
    lastName: "Smith",
    phoneNumber: "0987654321",
    email: "alice@example.com",
    photoUri: "uri2",
  },
  {
    id: "3",
    firstName: "Bob",
    lastName: "Johnson",
    phoneNumber: "5555555555",
    email: "bob@example.com",
    photoUri: "uri3",
  },
];

export const mockedExpoContacts = [
  {
    name: "",
    contactType: "person",
    id: "1",
    firstName: "John",
    lastName: "Doe",
    phoneNumbers: [{ label: "", number: "1234567890" }],
    emails: [{ label: "", email: "john@example.com" }],
    image: { uri: "uri1" },
  },
  {
    name: "",
    contactType: "person",
    id: "2",
    firstName: "Alice",
    lastName: "Smith",
    phoneNumbers: [{ label: "", number: "0987654321" }],
    emails: [{ label: "", email: "alice@example.com" }],
    image: { uri: "uri2" },
  },
  {
    name: "",
    contactType: "person",
    id: "3",
    firstName: "Bob",
    lastName: "Johnson",
    phoneNumbers: [{ label: "", number: "5555555555" }],
    emails: [{ label: "", email: "bob@example.com" }],
    image: { uri: "uri3" },
  },
] satisfies Partial<ExpoContact>[];

export const mockedExpoContactsWithMissingId = [
  {
    name: "",
    contactType: "person",
    firstName: "Charlie",
    lastName: "Brown",
    phoneNumbers: [{ label: "", number: "6666666666" }],
    emails: [{ label: "", email: "charlie@example.com" }],
    image: { uri: "uri4" },
  },
] satisfies Partial<ExpoContact[]>;
