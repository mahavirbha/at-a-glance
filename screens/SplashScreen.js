import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.splashText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
