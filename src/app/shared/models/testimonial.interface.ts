import { Local } from "./local.interface";

export interface Testimonial {
    id: Readonly<number>,
    citation: string,
    name: string,
    designation: string,
    link: string,
    local: Local,
    image: string,
}