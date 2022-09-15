import axios from 'axios';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

//styles

//Components
import ArticlePreview from './ArticlePreview';
import {scale, verticalScale} from 'react-native-size-matters';

const Index: React.FC = (): JSX.Element | null => {
  const [newsfeedData, setNewsfeedData] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/4d4008557f9ac84ebe64').then(response => {
      // console.log(response.data.data[15].name);
      setNewsfeedData(response.data.data);
    });
  }, []);

  // const keyExtractor = (item: IFeed) =>
  // item._id.toString();

  const renderItem = ({item}: any) => {
    return (
      <ArticlePreview
        name={item.name}
        image={item.image}
        title={item.title}
        articleText={item.articleText}
        url={item.url}
        time={item.time}
      />
    );
  };

  const poll = () => {
    return (
      <View
        style={{
          height: 50,
          marginHorizontal: scale(23),
          marginBottom: verticalScale(18),
          borderRadius: scale(10),
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, color: '#28235F'}}> TO DO: POOL </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={newsfeedData}
        renderItem={renderItem}
        // ItemSeparatorComponent={divider}
        // keyExtractor={item => item._id}
        ListHeaderComponent={poll}
      />
    </SafeAreaView>
  );
};

export default Index;
