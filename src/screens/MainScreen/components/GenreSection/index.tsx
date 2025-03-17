import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';

import BookCard from 'components/BookCard';
import { Book } from 'types/booksTypes';

import styles from './styles';

interface GenreSectionProps {
  title: string;
  books: Book[];
  navigation: any;
}

const GenreSection: React.FC<GenreSectionProps> = ({ title, books, navigation }) => {
  const keyExtractor = useCallback((item: Book) => item.id, []);

  const renderItem = useCallback(({ item, index }: { item: Book; index: number }) => {
    return (
      <BookCard key={index} navigation={navigation} book={item} />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={books}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default GenreSection;