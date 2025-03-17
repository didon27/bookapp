import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { getBookById } from 'utils/booksUtils';
import { BannerSlide } from 'types/booksTypes';
import { DEVICE_WIDTH } from 'constants/sizes';
import Screens from 'constants/screens';

import styles from './styles';

interface TopBannerCarouselProps {
    bookData: any,
    containerStyle: any,
    navigation: any
}

const slideWidth = DEVICE_WIDTH - 32;

const TopBannerCarousel: React.FC<TopBannerCarouselProps> = ({ bookData, containerStyle, navigation }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleBannerPress = (bookId: string) => {
        const book = getBookById(bookData, bookId);
        if (book) {
            navigation.navigate(Screens.Details, { book });
        }
    };

    const renderItem = ({ item, index }: { item: BannerSlide, index: number }) => {
        return (
            <TouchableHighlight onPress={() => handleBannerPress(item.book_id)}>
                <View style={styles.slideContainer}>
                    <Image
                        source={{ uri: item.cover }}
                        style={styles.slideImage}
                        resizeMode="cover"
                    />
                    <View style={styles.overlay} />
                </View>
            </TouchableHighlight>
        );
    }

    return (
        <View style={[styles.container, containerStyle && containerStyle]}>
            <Carousel
                autoplay={true}
                autoplayInterval={3000}
                autoplayDelay={1000}
                loop={true}
                data={bookData.top_banner_slides}
                renderItem={renderItem}
                contentContainerCustomStyle={{ paddingHorizontal: 16 }}
                onSnapToItem={(index) => setActiveSlide(index)}
                sliderWidth={slideWidth}
                itemWidth={slideWidth}
                itemHeight={180}
            />
            <Pagination
                dotsLength={bookData.top_banner_slides.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainerStyle}
                dotStyle={styles.dotStyle}
                inactiveDotStyle={styles.inactiveDotStyle}
                inactiveDotScale={1}
                inactiveDotOpacity={1}

            />
        </View>
    );
};

export default TopBannerCarousel;