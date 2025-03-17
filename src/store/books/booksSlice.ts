import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchBooksData, fetchDetailsCarousel } from './booksThunks';
import { Book, BooksState } from 'types/booksTypes';
import { booksByGenre, getRecommendedBooks } from 'utils/booksUtils';
import { BookData } from 'types/booksTypes';

const initialState: BooksState = {
  bookData: {
    top_banner_slides: [],
    books: [],
    you_will_like_section: [],
  },
  booksByGenre: {},
  detailsCarousel: [],
  recommendedBooks: [],
  loadingBookData: false,
  loadingDetailsCarousel: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.fulfilled, (state, action: PayloadAction<BookData>) => {
        state.bookData = action.payload;
        state.booksByGenre = booksByGenre(action.payload);
        state.recommendedBooks = getRecommendedBooks(action.payload);
        state.loadingBookData = false;
      })
      .addCase(fetchBooksData.pending, (state) => {
        state.loadingBookData = true;
      })
      .addCase(fetchBooksData.rejected, (state) => {
        state.loadingBookData = false;
      })
      .addCase(fetchDetailsCarousel.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.detailsCarousel = action.payload;
        state.loadingDetailsCarousel = false;
      })
      .addCase(fetchDetailsCarousel.pending, (state) => {
        state.loadingDetailsCarousel = true;
      })
      .addCase(fetchDetailsCarousel.rejected, (state) => {
        state.loadingDetailsCarousel = false;
      })
  },
});

export default booksSlice.reducer;
