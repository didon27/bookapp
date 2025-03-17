export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    cover_url: string;
    summary: string;
    views: number;
    likes: number;
    name: string;
    quotes: number;
}
export interface BookData {
    books: Book[];
    top_banner_slides: BannerSlide[];
    you_will_like_section: string[];
}

export interface BannerSlide {
    id: string;
    cover: string;
    book_id: string;
}

export interface BooksState {
    bookData: BookData,
    booksByGenre: Record<string, Book[]>,
    detailsCarousel: Book[],
    recommendedBooks: Book[],
    loadingBookData: boolean,
    loadingDetailsCarousel: boolean,
}