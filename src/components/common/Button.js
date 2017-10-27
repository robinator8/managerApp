// Some code taken from
// https://github.com/spencercarli/cross-platform-button-react-native/blob/master/Button.js

import React from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

const Button = ({ text, onPress }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#fff')}
    >
      <View style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#317af7',
    borderColor: '#317af7',
    marginLeft: 5,
    marginRight: 5,
    elevation: 1,
    borderRadius: 1,
  }
};
export { Button };

// ORIGINAL
//
// import React from 'react';
// import { View, Button as ReactButton } from 'react-native';
//
// const Button = ({ onPress, text, color }) => {
//   const { textStyle, buttonStyle } = styles;
//
//   return (
//     <View style={buttonStyle}>
//       <ReactButton
//         title={text}
//         style={textStyle}
//         color={color}
//         onPress={onPress}
//       />
//     </View>
//   );
// };
//
// const styles = {
//   textStyle: {
//     alignSelf: 'center',
//     color: '#007aff',
//     fontSize: 16,
//     fontWeight: '600',
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   buttonStyle: {
//     flex: 1,
//     alignSelf: 'stretch',
//     backgroundColor: '#841584',
//     borderColor: '#841584',
//     marginLeft: 5,
//     marginRight: 5,
//     elevation: 1,
//   }
// };
//
// export { Button };
