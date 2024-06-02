import React from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  TextProps,
} from "react-native";

type StyleProps = {
  field?: ViewProps["style"];
  label?: TextProps["style"];
  input?: TextInputProps["style"];
  isFocused?: TextInputProps["style"];
  error?: TextProps["style"];
};

type InputFieldProps = {
  onChangeText: (text: string) => void;
  value: string;
  style?: StyleProps;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
};

const InputField = (props: InputFieldProps) => {
  const { placeholder, onChangeText, style, value, label, errorMessage } =
    props;
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={style?.field}>
      <Text style={style?.label}>{label}</Text>
      <TextInput
        style={[style?.input, isFocused && style?.isFocused]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {errorMessage ? <Text style={style?.error}>{errorMessage}</Text> : null}
    </View>
  );
};

export default InputField;
