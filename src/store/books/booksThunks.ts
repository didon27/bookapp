import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRemoteConfigValue } from 'api/firebase';

const parseJson = (data: string, key: string) => {
  if (!data) throw new Error(`${key} data is empty or undefined`);
  
  try {
    return JSON.parse(data);
  } catch {
    throw new Error(`Failed to parse ${key} data: Invalid JSON`);
  }
};

export const fetchBooksData = createAsyncThunk(
  'books/fetchBooksData',
  async (_, { rejectWithValue }) => {
    try {
      const jsonData = await getRemoteConfigValue('json_data');
      return parseJson(jsonData, 'Books');
    } catch (error) {
      return rejectWithValue({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
);

export const fetchDetailsCarousel = createAsyncThunk(
  'books/fetchDetailsCarousel',
  async (_, { rejectWithValue }) => {
    try {
      const parsedData = parseJson(await getRemoteConfigValue('details_carousel'), 'Carousel');

      if (!Array.isArray(parsedData?.books)) {
        throw new Error('Invalid carousel data structure: books array is missing or not an array');
      }

      return parsedData.books;
    } catch (error) {
      return rejectWithValue({ message: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
);
