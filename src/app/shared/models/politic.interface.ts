import { Local } from "./local.interface";

export interface Politic {
    id: Readonly<number>,
    title: string,
    document: string,
    local: Local,
}