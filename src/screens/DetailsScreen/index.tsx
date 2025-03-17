import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useAppSelector } from 'store/store';
import { Book } from 'types/booksTypes';
import Screens from 'constants/screens';
import { RootStackParamList } from 'navigation/AppNavigator';
import RecommendedSection from '../../components/RecommendedSection';
import HeaderCarousel from './components/HeaderCarousel';
import SummarySection from './components/SummarySection';

import styles from './styles';


type DetailsScreenRouteProp = RouteProp<RootStackParamList, Screens.Details>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.Details>;

const DetailsScreen = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const { book } = route.params;
    const { detailsCarousel, recommendedBooks } = useAppSelector((state) => state.books);
    const [currentBook, setCurrentBook] = useState<Book>(book);

    return (
        <View style={styles.container}>
            <ScrollView
                bounces={false}
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <HeaderCarousel
                    navigation={navigation}
                    books={detailsCarousel}
                    currentBook={currentBook}
                    setCurrentBook={setCurrentBook}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{currentBook.views.toLocaleString()}</Text>
                            <Text style={styles.statLabel}>Readers</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{currentBook.likes.toLocaleString()}</Text>
                            <Text style={styles.statLabel}>Likes</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{currentBook.quotes.toLocaleString()}</Text>
                            <Text style={styles.statLabel}>Quotes</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{currentBook.genre}</Text>
                            <Text style={styles.statLabel}>Genre</Text>
                        </View>
                    </View>

                    <SummarySection summary={currentBook.summary} />
                    <View style={styles.separator} />
                    <RecommendedSection books={recommendedBooks} navigation={navigation} />

                    <TouchableOpacity style={styles.readButton}>
                        <Text style={styles.readButtonText}>Read Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;