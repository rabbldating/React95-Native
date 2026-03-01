import React from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';
//import { ChevronIcon } from '../..';

type Props = {
  disabled?: boolean;
  segments?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

/*const CloseIcon = ({
  disabled = false,
  segments = 4,
  style,
  theme,
  ...rest
}: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <ChevronIcon
        theme={theme}
        disabled={disabled}
        segments={segments}
        direction='right'
      />
      <ChevronIcon
        theme={theme}
        disabled={disabled}
        segments={segments}
        direction='left'
        style={{ marginLeft: -2, marginRight: 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});*/

const CloseIcon = ({
  disabled = false,
  segments = 4,
  style,
  theme,
  ...rest
}: Props) => {
  return (
    <View style={style} {...rest}>
      <Image
        source={!disabled ? require('../../assets/images/close-icon10x11.png') : require('../../assets/images/close-icon10x11disabled.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 10,
    height: 11,
  },
});

export default withTheme(CloseIcon);
