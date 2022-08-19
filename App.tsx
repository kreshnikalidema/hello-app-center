import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello App Center</Text>
      <Text style={styles.version}>Version: 0.0.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 20,
  },
  version: {
    fontSize: 12,
  },
});
