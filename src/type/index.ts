export type Ticket = {
    event: string,
    date: number,
    count: number
}

export type Movie = {
    id: number,
    name: string,
    year: number,
    category: string,
    img?: string
}

export type Theater = {
    id: number,
    name: string,
    img?: string
}

export type Concert = {
    id: number,
    name: string,
    img?: string
}