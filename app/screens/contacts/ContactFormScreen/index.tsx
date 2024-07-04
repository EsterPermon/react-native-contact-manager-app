import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ContactFormNavigationProps,
  ContactFormRouteProps,
} from "@/app/navigator/types";
import translate from "@/app/i18n";
import { Contact } from "@/app/features/contacts/types";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { selectContactById } from "@/app/features/contacts/selectors";
import { addContact, editContact } from "@/app/features/contacts/contactsSlice";
import { ScreenName } from "@/app/navigator/constants";
import ContactForm from "@/app/components/contacts/ContactForm";
import uuid from "react-native-uuid";
import { styles } from "./styles";
import ContactAvatar from "@/app/components/contacts/ContactAvatar";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

type ContactFormProps = {
  route: ContactFormRouteProps;
};

const emptyContact = {
  id: uuid.v4() as string,
  firstName: "",
  phoneNumber: "",
  email: "",
  lastName: "",
} as Contact;

const ContactFormScreen = (props: ContactFormProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ContactFormNavigationProps>();
  const { route } = props;
  const contactId = route.params?.contactId;
  const contactById = contactId
    ? useAppSelector(selectContactById(contactId))
    : undefined;

  const initialValues = contactById || emptyContact;
  const [imageUri, setImageUri] = React.useState<string | undefined>(
    contactById?.photoUri,
  );

  React.useEffect(() => {
    const translationKey = contactById
      ? "editContactHeader"
      : "addContactHeader";
    navigation.setOptions({
      title: translate(`contactFormScreen.${translationKey}`),
    });
  }, [contactById]);

  const onSubmit = (data: Contact) => {
    const contact = { ...data, photoUri: imageUri };

    if (contactId) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact(contact));
    }
    navigation.replace(ScreenName.ContactDetails, { contactId: data.id });
  };

  const onCancel = () => {
    if (contactId) {
      navigation.navigate(ScreenName.ContactDetails, {
        contactId,
      });
    } else {
      navigation.navigate(ScreenName.ContactsList);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={64}
    >
      <ScrollView>
        <ContactAvatar imageUri={imageUri} setImageUri={setImageUri} />
        <ContactForm
          defaultValues={initialValues}
          handleOnCancel={onCancel}
          handleOnSubmit={onSubmit}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ContactFormScreen;
