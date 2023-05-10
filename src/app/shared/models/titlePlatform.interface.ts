import { Title } from "./title.interface";

export interface TitlePlatform {
    id: Readonly<number>,
    link: string,
    fa: string,
    title: Title,
}