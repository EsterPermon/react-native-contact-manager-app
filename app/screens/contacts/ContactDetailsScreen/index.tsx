import { selectContactById } from "@/app/features/contacts/selectors";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import translate from "@/app/i18n";
import { useAppSelector } from "@/app/store";
import {
  ContactDetailsRouteProps,
  ContactFormNavigationProps,
} from "@/app/navigator/types";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "@/app/navigator/constants";
import { styles } from "./styles";
import Button from "@/app/components/UI/Button";
import { AvatarIcon } from "@/app/ui/icons";
import { Colors } from "@/app/ui/constants/Colors";

type ContactDetailsProps = {
  route: ContactDetailsRouteProps;
};

const ContactDetailsScreen = (props: ContactDetailsProps) => {
  const navigation = useNavigation<ContactFormNavigationProps>();
  const { route } = props;
  const contactId = route.params.contactId;
  const contactDetails = useAppSelector(selectContactById(contactId));

  return (
    <SafeAreaView style={styles.container}>
      {contactDetails ? (
        <>
          <View style={styles.alignOnMiddleContainer}>
            {contactDetails.photoUri ? (
              <Image
                source={{ uri: contactDetails.photoUri }}
                style={styles.image}
              />
            ) : (
              <AvatarIcon
                color={Colors.helloFreshPalmLeaf}
                backgroundColor={Colors.helloFreshDarkLemonLime}
              />
            )}
          </View>
          <Text style={styles.item}>
            <Text style={styles.label}>
              {translate("contactDetailsScreen.firstName.label")}
            </Text>
            {contactDetails.firstName}
          </Text>
          <Text style={styles.item}>
            <Text style={styles.label}>
              {translate("contactDetailsScreen.lastName.label")}
            </Text>
            {contactDetails.lastName}
          </Text>
          <Text style={styles.item}>
            <Text style={styles.label}>
              {translate("contactDetailsScreen.phoneNumber.label")}
            </Text>
            {contactDetails.phoneNumber}
          </Text>
          <Text style={styles.item}>
            <Text style={styles.label}>
              {translate("contactDetailsScreen.email.label")}
            </Text>
            {contactDetails.email}
          </Text>
          <View style={styles.alignOnMiddleContainer}>
            <Button
              style={{ label: styles.buttonLabel, button: styles.button }}
              onPress={() =>
                navigation.navigate(ScreenName.ContactForm, {
                  contactId,
                })
              }
              title={translate("contactDetailsScreen.editButton.label")}
            />
          </View>
        </>
      ) : (
        <Text>{translate("contactDetailsScreen.errorMessage")}</Text>
      )}
    </SafeAreaView>
  );
};

export default ContactDetailsScreen;
