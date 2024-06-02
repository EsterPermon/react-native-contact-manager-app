import { RootState } from "@/app/store";
import { groupContactsByLetter, sortByFistName } from "@/app/utils";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = (state: RootState) =>
  state.contacts.allContacts;

export const selectGroupedContacts = createSelector(
  selectAllContacts,
  (allContacts) => {
    const allContactsArray = Object.values(allContacts).sort(sortByFistName);
    return groupContactsByLetter(allContactsArray);
  },
);

export const selectContactById = (id: string) =>
  createSelector(selectAllContacts, (contactsMap) => contactsMap[id]);
