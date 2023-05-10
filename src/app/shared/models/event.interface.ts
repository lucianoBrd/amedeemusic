import { Local } from "./local.interface";

export interface Event {
    id: Readonly<number>,
    name: string,
    date: Date,
    place: string,
    link: string,
    local: Local,
}