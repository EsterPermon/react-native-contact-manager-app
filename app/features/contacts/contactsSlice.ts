import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as ExpoContacts from "expo-contacts";
import type { Contact, Contacts } from "./types";
import { groupContactsById } from "@/app/utils";

interface ContactsState {
  allContacts: Contacts;
  loading: boolean;
  error?: string;
}

const initialState: ContactsState = {
  allContacts: {},
  loading: false,
  error: undefined,
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (): Promise<Contacts> => {
    try {
      const permission = await ExpoContacts.requestPermissionsAsync();
      if (permission.status === "granted") {
        const { data } = await ExpoContacts.getContactsAsync();
        return groupContactsById(data);
      }
      return {};
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state: ContactsState, action: PayloadAction<Contact>) => {
      state.allContacts[action.payload.id] = action.payload;
    },
    editContact: (state: ContactsState, action: PayloadAction<Contact>) => {
      state.allContacts[action.payload.id] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.allContacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;
