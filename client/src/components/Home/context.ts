import { createContext } from "react";
import { IBooksContext} from "../../types";

export const BookContext = createContext<IBooksContext>({
   books: [],
   genres: [],
   setGenreFilter: ()=>{},
    setReviewFilter: ()=>{},
    setPriceFilter: ()=>{},
    genreFilter: '',
    reviewFilter: '',
    priceFilter: '',
})