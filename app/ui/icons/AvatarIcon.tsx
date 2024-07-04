import * as React from "react";
import type { ColorValue } from "react-native";
import { Path, Rect } from "react-native-svg";
import { Icon, IconProps } from "./Icon";

const DEFAULT_ICON_SIZE = 120; // Updated to 120px

type Props = IconProps & {
  backgroundColor?: ColorValue;
  color?: ColorValue;
};

export const AvatarIcon = (props: Props) => {
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
        rx={60}
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M80 90v-10c0-8.8-7.2-16-16-16H56c-8.8 0-16 7.2-16 16v10m34-50a16 16 0 1 1-32 0 16 16 0 0 1 32 0Z"
      />
    </Icon>
  );
};
