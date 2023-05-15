import { Message } from "./message.interface";

export interface User {
    id: Readonly<number>,
    name: string,
    mail: string,
    subscribe: Boolean,
    secret: string,
    messages: Message[],
}