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
    books: IBooks[]
}