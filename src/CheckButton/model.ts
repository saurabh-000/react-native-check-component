
import type React from 'react';
import type { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';

interface Props  {
  checked?:boolean;
  onPress?:() => void;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  imageSource?:ImageSourcePropType;
}

export type InputProps = React.FC<Props>;