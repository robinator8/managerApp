import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, style }) => (
  <View style={[styles.constainerStyle, style]}>
    {children}
  </View>
);

const styles = {
  constainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  textStyle: {

  }
};

export { CardSection };
