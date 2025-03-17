import React, { memo } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Book } from 'types/booksTypes';
import Screens from 'constants/screens';

import styles from './styles';

interface BookCardProps {
  book: Book;
  titleStyle?: any;
  navigation: any;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  titleStyle,
  navigation
}) => {
  const handlePress = () => {
    navigation.push(Screens.Details, { book });
  };

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: book.cover_url }}
        style={styles.coverImage}
        resizeMode="cover"
      />
      <Text style={[styles.title, titleStyle && titleStyle]} numberOfLines={2}>
        {book.name}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(BookCard);