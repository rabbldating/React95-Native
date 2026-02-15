import React from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

type Props = {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

/*
const pixelSize = 1.5;
const segmentSize = 3 * pixelSize;

const CheckmarkIcon = ({
  disabled = false,
  style = {},
  theme,
  ...rest
}: Props) => {
  const segmentOffsets = [2, 3, 4, 3, 2, 1, 0];

  return (
    <View style={[styles.wrapper, style]} {...rest}>
      {segmentOffsets.map((offset, i) => (
        <View
          key={i}
          style={[
            styles.segment,
            {
              marginTop: offset * pixelSize,
              backgroundColor: disabled
                ? theme.checkmarkDisabled
                : theme.checkmark,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
  },
  segment: {
    width: pixelSize,
    height: segmentSize,
  },
});
*/

const CheckmarkIcon = ({
  disabled = false,
  style = {},
  theme,
  ...rest
}: Props) => {
  return (
    <View style={style} {...rest}>
      <Image
        source={!disabled ? require('../../assets/images/check10x11.png') : require('../../assets/images/check10x11disabled.png')}
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

export default withTheme(CheckmarkIcon);
