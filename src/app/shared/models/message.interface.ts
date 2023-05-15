import { User } from "./user.interface";

export interface Message {
    id: Readonly<number>,
    message: string,
    date: Date,
    user: User,
}