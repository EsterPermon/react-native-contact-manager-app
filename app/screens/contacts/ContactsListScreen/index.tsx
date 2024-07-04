import React from "react";
import { SafeAreaView, Text } from "react-native";
import translate from "@/app/i18n";
import { fetchContacts } from "@/app/features/contacts/contactsSlice";
import { useAppDispatch, useAppSelector } from "@/app/store";
import ContactsList from "@/app/components/contacts/ContactsList";
import { Colors } from "@/app/ui/constants/Colors";

const ContactsListScreen = () => {
  const dispatch = useAppDispatch();
  const contactsError = useAppSelector((state) => state.contacts.error);
  const isLoadingContacts = useAppSelector((state) => state.contacts.loading);

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoadingContacts) {
    return <Text>{translate("contactsScreen.loadingMessage")}</Text>;
  }

  if (contactsError) {
    return (
      <Text>
        {translate("contactsScreen.errorMessage", {
          contactsError,
        })}
      </Text>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.helloFreshWhite }}>
      <ContactsList />
    </SafeAreaView>
  );
};

export default ContactsListScreen;
