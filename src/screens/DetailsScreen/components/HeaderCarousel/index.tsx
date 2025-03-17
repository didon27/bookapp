import React, { useCallback } from 'react';
import {
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {  useSafeAreaInsets } from 'react-native-safe-area-context';

import { Book } from 'types/booksTypes';
import ArrowLeft from 'assets/icons/svg/arrow-left.svg'
import { DEVICE_WIDTH } from 'constants/sizes';

import styles from './styles';

interface HeaderCarouselProps {
    books: Book[];
    currentBook: Book;
    setCurrentBook: (book: Book) => void;
    navigation: any;
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({
    books,
    currentBook,
    setCurrentBook,
    navigation,
}) => {
    const insets = useSafeAreaInsets();

    const renderItem = useCallback(({ item }: { item: Book }) => (
        <View style={styles.slide}>
            <Image source={{ uri: item.cover_url }} style={styles.image} />
            {item.id === currentBook.id && (
                <View>
                    <Text style={styles.bookTitle}>{item.name}</Text>
                    <Text style={styles.bookAuthor}>{item.author}</Text>
                </View>
            )}
        </View>
    ), [currentBook.id]);

    return (
        <ImageBackground source={require('assets/images/background.png')} style={[styles.container, { paddingTop: insets.top || 16 }]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowLeft />
            </TouchableOpacity>

            <Carousel
                inactiveSlideScale={0.8}
                firstItem={books.findIndex((b) => b.id === currentBook.id)}
                data={books}
                renderItem={renderItem}
                onSnapToItem={(index) => setCurrentBook(books[index])}
                sliderWidth={DEVICE_WIDTH}
                itemWidth={200}
            />
        </ImageBackground>
    );
};

export default HeaderCarousel;
