import * as React from 'react';
import {View} from 'react-native';
import Trending from '../components/TrendingComponent';
import NetworkHelper from '../core/NetworkHelper';

export const HomeScreen = (): JSX.Element => {
  return (
    <View>
      <NetworkHelper />
      <Trending />
    </View>
  );
};
