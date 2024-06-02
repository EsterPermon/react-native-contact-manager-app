import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "./constants";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  [ScreenName.ContactsList]: undefined;
  [ScreenName.ContactDetails]: { contactId: string };
  [ScreenName.ContactForm]: { contactId: string } | undefined;
};

export type ContactDetailsRouteProps = RouteProp<
  RootStackParamList,
  typeof ScreenName.ContactDetails
>;

export type ContactDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  typeof ScreenName.ContactDetails
>;

export type ContactFormNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  typeof ScreenName.ContactForm
>;

export type ContactFormRouteProps = RouteProp<
  RootStackParamList,
  typeof ScreenName.ContactForm
>;
