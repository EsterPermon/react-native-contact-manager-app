import { UserIcon } from "@/app/ui/icons";
import { Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ContactDetailsNavigationProps } from "@/app/navigator/types";
import type { Contact } from "@/app/features/contacts/types";
import { ScreenName } from "@/app/navigator/constants";
import { Colors } from "@/app/ui/constants/Colors";
import { styles } from "./styles";

type ContactItemProps = {
  contact: Contact;
};

const ContactItem = (props: ContactItemProps) => {
  const { contact } = props;
  const navigation = useNavigation<ContactDetailsNavigationProps>();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.ContactDetails, {
          contactId: contact.id,
        })
      }
    >
      {contact.photoUri ? (
        <Image source={{ uri: contact.photoUri }} style={styles.image} />
      ) : (
        <UserIcon
          color={Colors.helloFreshPalmLeaf}
          backgroundColor={Colors.helloFreshDarkLemonLime}
          style={styles.icon}
        />
      )}
      <Text style={styles.label}>{contact.firstName}</Text>
    </Pressable>
  );
};

export default ContactItem;
