import React, {type PropsWithChildren}  from 'react';
import { StyleSheet, View, Text } from 'react-native';

const defaultJSONData = {
    status: 'New',
    _id: '63abe2fee7232100086b5e06',
    link: 'https://www.dailystar.co.uk/sport/football/gakpo-arriving-england-liverpool-medical-28825640',
    __v: 0,
    created_at: '2022-12-28T06:32:30.726Z',
    feed: 'DailyStar',
    rank: 0,
    title: 'PSV and Holland star Cody Gakpo was reportedly due to arrive in the UK on Tuesday night ahead of his move to Liverpool and is expected to complete the main part of his medical in the coming hours',
    updated_at: '2022-12-28T06:32:30.726Z',
    votes: 249,
    age: 'an hour'
};

const Post: React.FC<
  PropsWithChildren<{
    feed: string;
    title: string;
    age: string;
  }>
> = ({children, feed, title, age}) => {
  return (
    <View style={styles.postContainer}>
      <Text
        style={[
          styles.postTitle,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.postSubtitle,
        ]}>
        {age} ({feed})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    postContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    postTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    postSubtitle: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Post;