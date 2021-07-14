import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  position: 'bl' | 'br';
  onPress: () => void;
}

export const FAB = ({ title, onPress, position = 'br' }: Props) => {
  /**
   * Custom styles for iOS
   * @returns JSX.Element
   */
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  /**
   * Custom styles for Android
   * @returns JSX.Element
   */
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
      >
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={onPress}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,

    // Shadow Btn
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  fabText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 25,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
});
