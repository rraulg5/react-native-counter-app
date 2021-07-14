import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from '../components/FAB';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      <FAB title="-1" position="bl" onPress={() => setCounter(counter - 1)} />
      <FAB title="+1" position="br" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
});
