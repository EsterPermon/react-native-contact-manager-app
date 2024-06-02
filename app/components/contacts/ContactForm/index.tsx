import React from "react";
import translate from "@/app/i18n";
import { Contact } from "@/app/features/contacts/types";
import { Controller, useForm } from "react-hook-form";
import InputField from "@/app/components/UI/InputField";
import { PHONE_NUMBER_REGEX } from "@/app/utils";
import Button from "@/app/components/UI/Button";
import { styles } from "./styles";
import { View } from "react-native";

type FormProps = {
  defaultValues: Contact;
  handleOnSubmit: (data: Contact) => void;
  handleOnCancel: () => void;
};

const ContactForm = (props: FormProps) => {
  const { defaultValues, handleOnCancel, handleOnSubmit } = props;
  const { handleSubmit, control } = useForm<Contact>({
    defaultValues,
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: translate("contactForm.error.requiredFirstName"),
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <InputField
            placeholder={translate("contactForm.input.placeholder.firstName")}
            onChangeText={onChange}
            value={value}
            label={translate("contactForm.input.label.firstName")}
            errorMessage={error?.message}
            style={{
              field: styles.field,
              input: styles.input,
              isFocused: styles.inputFocused,
              label: styles.label,
              error: styles.errorMessage,
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field: { value, onChange } }) => (
          <InputField
            placeholder={translate("contactForm.input.placeholder.lastName")}
            onChangeText={onChange}
            value={value || ""}
            label={translate("contactForm.input.label.lastName")}
            style={{
              field: styles.field,
              input: styles.input,
              isFocused: styles.inputFocused,
              label: styles.label,
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="phoneNumber"
        rules={{
          required: translate("contactForm.error.requiredPhoneNumber"),
          pattern: {
            value: PHONE_NUMBER_REGEX,
            message: translate("contactForm.error.invalidPhoneNumber"),
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputField
            placeholder={translate("contactForm.input.placeholder.phoneNumber")}
            onChangeText={onChange}
            value={value}
            label={translate("contactForm.input.label.phoneNumber")}
            errorMessage={error?.message}
            style={{
              field: styles.field,
              input: styles.input,
              isFocused: styles.inputFocused,
              label: styles.label,
              error: styles.errorMessage,
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <InputField
            placeholder={translate("contactForm.input.placeholder.email")}
            onChangeText={onChange}
            value={value || ""}
            label={translate("contactForm.input.label.email")}
            style={{
              field: styles.field,
              input: styles.input,
              isFocused: styles.inputFocused,
              label: styles.label,
            }}
          />
        )}
      />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={handleOnCancel}
          title={translate("contactForm.cancelButton.label")}
          style={{ label: styles.buttonLabel, button: styles.button }}
        />
        <Button
          onPress={handleSubmit(handleOnSubmit)}
          title={translate("contactForm.submitButton.label")}
          style={{ label: styles.buttonLabel, button: styles.button }}
        />
      </View>
    </View>
  );
};

export default ContactForm;
