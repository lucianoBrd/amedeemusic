import { Local } from "./local.interface";

export interface Blog {
    id: Readonly<number>,
    image: string,
    date: Date,
    title: string,
    slug: string,
    content: string,
    local: Local,
}