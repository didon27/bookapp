import { Book, BookData } from "types/booksTypes";

// Group books by genre
export const booksByGenre = (bookData: BookData) => {
    return bookData?.books.reduce((acc, book) => {
        if (!acc[book.genre]) {
            acc[book.genre] = [];
        }
        acc[book.genre].push(book);
        return acc;
    }, {} as Record<string, Book[]>) || {};
}

// Get recommended books from you_will_like_section
export const getRecommendedBooks = (bookData: BookData) => {
    if (!bookData) return [];

    return (bookData.you_will_like_section || [])
        .map(id => bookData.books.find(book => book.id === id))
        .filter(book => book !== undefined) as Book[];
};

// Get a book by ID
export const getBookById = (bookData: BookData, id: string) => {
    if (!bookData) return null;
    return bookData.books.find(book => book.id === id) || null;
};
