import * as React from "react";
import type { ColorValue } from "react-native";
import { Path, Rect } from "react-native-svg";
import { Icon, IconProps } from "./Icon";

const DEFAULT_ICON_SIZE = 24;

type Props = IconProps & {
  backgroundColor?: ColorValue;
  color?: ColorValue;
};

export const PlusIcon = (props: Props) => {
  const { backgroundColor, color } = props;
  return (
    <Icon
      viewBox={`0 0 ${DEFAULT_ICON_SIZE} ${DEFAULT_ICON_SIZE}`}
      width={DEFAULT_ICON_SIZE}
      height={DEFAULT_ICON_SIZE}
      fill="none"
      {...props}
    >
      <Rect
        width={DEFAULT_ICON_SIZE}
        height={DEFAULT_ICON_SIZE}
        fill={backgroundColor}
        rx={50}
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 6v12M6 12h12"
      />
    </Icon>
  );
};
