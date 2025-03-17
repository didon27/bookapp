import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

import styles from './styles';

const InfiniteProgressBar = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
        easing: Easing.linear,
      })
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 300], // Adjust based on bar width
  });

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

export default InfiniteProgressBar;