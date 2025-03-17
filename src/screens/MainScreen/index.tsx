import React, { useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import TopBannerCarousel from './components/TopBannerCarousel';
import GenreSection from './components/GenreSection';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fetchBooksData, fetchDetailsCarousel } from 'store/books/booksThunks';
import { RootStackParamList } from 'navigation/AppNavigator';
import { initializeFirebase } from 'api/firebase';
import Screens from 'constants/screens';

import styles from './styles';

type NavigationProp = StackNavigationProp<RootStackParamList, Screens.Main>;

const MainScreen = () => {
    const { bookData, booksByGenre } = useAppSelector((state) => state.books);
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
           await initializeFirebase()
           dispatch(fetchDetailsCarousel())
           dispatch(fetchBooksData())
        }
        fetchData();
    }, []);
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Library</Text>

                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <TopBannerCarousel
                        navigation={navigation}
                        containerStyle={styles.carouselContainer}
                        bookData={bookData}
                    />

                    {Object.entries(booksByGenre).map(([genre, books]) => (
                        <GenreSection
                            key={genre}
                            navigation={navigation}
                            title={genre}
                            books={books}
                        />
                    ))}

                    <View style={styles.bottomPadding} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;