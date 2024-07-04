import React from "react";
import { SectionList, Text } from "react-native";
import { selectGroupedContacts } from "@/app/features/contacts/selectors";
import { useAppSelector } from "@/app/store";
import ContactItem from "../ContactItem";
import { createSectionList } from "@/app/utils";
import { ContactsSectionList } from "@/app/features/contacts/types";
import { styles } from "./styles";

const ContactsList = () => {
  const groupedContacts = useAppSelector(selectGroupedContacts);
  const [contactsSectionList, setContactsSectionList] =
    React.useState<ContactsSectionList>();

  React.useEffect(() => {
    const sectionList = createSectionList(groupedContacts);
    setContactsSectionList(sectionList);
  }, [groupedContacts]);

  return (
    <>
      {contactsSectionList ? (
        <SectionList
          sections={contactsSectionList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ContactItem contact={item} />}
          renderSectionHeader={({ section }) => (
            <Text style={styles.title}>{section.title}</Text>
          )}
          stickySectionHeadersEnabled={false}
        />
      ) : null}
    </>
  );
};

export default ContactsList;
