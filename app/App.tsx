import React from "react";
import { Provider } from "react-redux";
import ContactsListScreen from "@/app/screens/contacts/ContactsListScreen";
import { store } from "@/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import translate from "@/app/i18n";
import ContactDetailsScreen from "@/app/screens/contacts/ContactDetailsScreen";
import { RootStackParamList } from "@/app/navigator/types";
import { ScreenName } from "@/app/navigator/constants";
import ContactFormScreen from "@/app/screens/contacts/ContactFormScreen";
import { View } from "react-native";
import { Colors } from "@/app/ui/constants/Colors";
import IconButton from "@/app/components/UI/IconButton";
import { PlusIcon } from "@/app/ui/icons";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          padding: 20,
          flex: 1,
          backgroundColor: Colors.helloFreshWhite,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ScreenName.ContactsList}>
            <Stack.Screen
              name={ScreenName.ContactsList}
              component={ContactsListScreen}
              options={({ navigation }) => ({
                title: translate("contactsScreen.header"),
                headerRight: () => (
                  <IconButton
                    icon={
                      <PlusIcon
                        color={Colors.helloFreshWhite}
                        backgroundColor={Colors.helloFreshDarkLemonLime}
                      />
                    }
                    onPress={() => navigation.navigate(ScreenName.ContactForm)}
                  />
                ),
              })}
            />
            <Stack.Screen
              name={ScreenName.ContactDetails}
              component={ContactDetailsScreen}
              options={{ title: translate("contactDetailsScreen.header") }}
            />
            <Stack.Screen
              name={ScreenName.ContactForm}
              component={ContactFormScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
