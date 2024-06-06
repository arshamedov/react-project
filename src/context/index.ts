import { createContext } from "react";
import { Concert, Movie, Theater } from "../type";

export const Context = createContext<DataType>({});

interface DataType {
    movies?: Movie[]
    theaters?: Theater[]
    concerts?: Concert[]
}