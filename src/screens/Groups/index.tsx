import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Groups: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
    </View>
  );
};

// export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
