import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";
import translate from "@/app/i18n";
import React from "react";
import { Image, View } from "react-native";
import { AvatarIcon } from "@/app/ui/icons";
import { Colors } from "@/app/ui/constants/Colors";
import Button from "@/app/components/UI/Button";

type ContactAvatarProps = {
  imageUri: string | undefined;
  setImageUri: (uri: string) => void;
};

const ContactAvatar = (props: ContactAvatarProps) => {
  const { imageUri, setImageUri } = props;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchCameraAsync({
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <AvatarIcon
          color={Colors.helloFreshPalmLeaf}
          backgroundColor={Colors.helloFreshDarkLemonLime}
          style={{ alignSelf: "center" }}
        />
      )}
      <View style={styles.buttonsContainer}>
        <Button
          onPress={pickImage}
          title={translate("contactFormScreen.addPhotoFromGalleyButton.label")}
          style={{ label: styles.buttonLabel, button: styles.button }}
        />
        <Button
          onPress={takePhoto}
          title={translate("contactFormScreen.addPhotoFromCamera.label")}
          style={{ label: styles.buttonLabel, button: styles.button }}
        />
      </View>
    </View>
  );
};

export default ContactAvatar;
