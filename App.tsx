/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlatList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import Post from './src/components/Post'
import { getTopPosts } from './src/utils/fetchPosts';


type PostModel = {
  _id: string;
  feed: string;
  title: string;
  age: string;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<PostModel[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const DATA = [
    {
      _id: '001',
      feed: 'DailyStar',
      title: 'First Item',
      age: 'an hour',
    },
    {
      _id: '002',
      feed: 'DailyStar',
      title: 'Second Item',
      age: 'an hour',
    },
    {
      _id: '003',
      feed: 'DailyStar',
      title: 'Third Item',
      age: 'an hour',
    },
    {
      _id: '004',
      feed: 'DailyStar',
      title: 'Fourth Item',
      age: 'an hour',
    },
    {
      _id: '005',
      feed: 'DailyStar',
      title: 'Fifth Item',
      age: 'an hour',
    },
  ];

  const getPosts = async () => {
		getTopPosts()
			.then(posts => {
        setData(posts);
			})
			.catch(error=> console.error(error))
      .finally( () => {
        setLoading(false);
      })
	};

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header title="Football Fan"/>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
        data={data}
        keyExtractor={item => `${item._id}`}
        renderItem={({item}) => (  
          <Post feed={item.feed} title={item.title} age={item.age}/>
        )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
