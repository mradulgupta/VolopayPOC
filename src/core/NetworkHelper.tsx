import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {StyleSheet, Text} from 'react-native';
/**
 * Checks for active Internet Collectiom
 */
//TODO : Update the look and feel of the network indicator
const NetworkHelper = (): JSX.Element => {
  const {isConnected} = useNetInfo();
  return (
    <React.Fragment>
      {!isConnected && (
        <Text style={style.text}>
          Network Status : {isConnected?.toString()}
        </Text>
      )}
    </React.Fragment>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'red',
    textAlign: 'center',
  },
});

export default NetworkHelper;
