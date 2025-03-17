import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Modal } from 'react-native';

import InfiniteProgressBar from '../InfiniteProgressBar';

import styles from './styles';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal visible={showSplash} animationType="fade" transparent>
      <ImageBackground source={require('assets/images/splash-background.png')} style={styles.container}>
        <Text style={styles.title}>Book App</Text>
        <Text style={styles.subtitle}>Welcome to Book App</Text>
        <View style={styles.progressContainer}>
          <InfiniteProgressBar />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default SplashScreen;