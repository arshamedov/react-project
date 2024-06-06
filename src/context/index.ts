import { createContext } from "react";
import { Movie, Theater } from "../type";

export const Context = createContext<DataType>({});

interface DataType {
    movies?: Movie[]
    theaters?: Theater[]
}