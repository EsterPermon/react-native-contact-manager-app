import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  Text,
  TextProps,
} from "react-native";

type StyleProps = {
  button?: PressableProps["style"];
  label?: TextProps["style"];
};

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: StyleProps;
};

const Button = (props: ButtonProps) => {
  const { onPress, title, style } = props;
  return (
    <Pressable style={style?.button} onPress={onPress}>
      <Text style={style?.label}>{title}</Text>
    </Pressable>
  );
};

export default Button;
