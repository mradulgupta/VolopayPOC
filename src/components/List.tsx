import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import {GIF} from '../api/gif/types';
import {Item} from './Item';

export const List = ({
  flatlistData,
  endReached,
  isLoading,
}: {
  flatlistData: [];
  endReached: any;
  isLoading: boolean;
}) => {
  const renderItem: ListRenderItem<GIF> = ({item}) => (
    <Item title={item.images.fixed_width_small.url} />
  );
  const renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!isLoading) {
      return null;
    }
    return <ActivityIndicator size="large" />;
  };
  return (
    <FlatList<GIF>
      style={style.list}
      data={flatlistData}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={endReached}
      onEndReachedThreshold={0.7}
      ListFooterComponent={renderFooter}
    />
  );
};
const style = StyleSheet.create({
  list: {
    margin: 5,
  },
});
