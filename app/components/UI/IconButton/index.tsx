import { ReactElement } from "react";
import { GestureResponderEvent, Pressable, PressableProps } from "react-native";

type IconButtonProps = {
  icon: ReactElement;
  onPress: (event: GestureResponderEvent) => void;
  style?: PressableProps["style"];
};

const IconButton = (props: IconButtonProps) => {
  const { onPress, icon, style } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      {icon}
    </Pressable>
  );
};

export default IconButton;
