import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Book } from 'types/booksTypes';
import BookCard from '../BookCard';
import styles from './styles';

interface RecommendedSectionProps {
  books: Book[];
  navigation: any;
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ books, navigation }) => {
  const keyExtractor = useCallback((item: Book) => item.id, []);

  const renderItem = useCallback(({ item, index }: { item: Book; index: number }) => {
    return (
      <BookCard key={index} titleStyle={styles.itemTitle} navigation={navigation} book={item} />
    );
  }, []);

  return (
    <View>
      <Text style={styles.title}>You will also like</Text>
      <FlatList
        data={books}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecommendedSection;