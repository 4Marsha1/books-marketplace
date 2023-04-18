export interface IBooks {
    id: number,
    name: string,
    authors: string,
    user_ratings: number,
    reviews: number,
    price: number,
    year: number,
    genre: string,
    createdAt: string
}

export interface IBooksContext {
    books: IBooks[],
    genres: string[],
    setGenreFilter: (value:string)=>void
    setReviewFilter: (value:string)=>void
    setPriceFilter: (value:string)=>void
    genreFilter: string,
    reviewFilter: string,
    priceFilter: string,
}