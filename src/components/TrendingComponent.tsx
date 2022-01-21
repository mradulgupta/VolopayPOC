import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {useTrendingQuery, useSearchQuery} from '../api/gif';
import {Searchbar} from 'react-native-paper';
import {skipToken} from '@reduxjs/toolkit/dist/query';
import {List} from './List';
import {useTranslation} from 'react-i18next';
const Trending = () => {
  const [offset, setOffset] = useState(0);
  const [flatListData, setFlatListData] = useState([]);
  const {data, error, isLoading} = useTrendingQuery(offset);
  const [searchOffset, setSearchOffset] = useState(skipToken); //using skipToken so that search dosent get calls on page load
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchFlatListData, setSearchFlatListData] = useState([]);
  const {t} = useTranslation();
  const onChangeSearch = query => setSearchQuery(query);
  const [off, setOff] = useState(0);
  const {
    data: searchData,
    error: searchError,
    isLoading: isSearchLoading,
  } = useSearchQuery(searchOffset);

  //to update our trending data
  useEffect(() => {
    if (data?.length) {
      setFlatListData([...flatListData, ...data]);
    }
  }, [data]);

  //to clear search result when cross icon is pressed in search bar
  useEffect(() => {
    if (searchQuery === '') {
      setSearchFlatListData([]);
    }
  }, [searchQuery]);

  //to update search data
  useEffect(() => {
    if (searchData?.length) {
      setSearchFlatListData([...searchFlatListData, ...searchData]);
    }
  }, [searchData]);

  //trigger search
  const searchGif = async () => {
    setSearchFlatListData([]);
    setSearchOffset({
      query: searchQuery,
      off: 0,
    });
  };

  return (
    <View>
      <Searchbar
        placeholder={t('search')}
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={searchGif}
      />

      {searchQuery === '' ? (
        <React.Fragment>
          {isLoading && <ActivityIndicator size="large" />}
          {error && <Text>{t('error')}</Text>}
          {data && (
            <List
              flatlistData={flatListData}
              isLoading={isLoading}
              endReached={() => setOffset(offset + 20)}
            />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {isSearchLoading && <ActivityIndicator size="large" />}
          {searchError && <Text>{t('error')}</Text>}
          {searchData && (
            <List
              flatlistData={searchFlatListData}
              isLoading={isLoading}
              endReached={() => {
                setSearchOffset({
                  query: searchQuery,
                  off: off + 20,
                });
                setOff(off + 20);
              }}
            />
          )}
        </React.Fragment>
      )}
    </View>
  );
};

export default Trending;
