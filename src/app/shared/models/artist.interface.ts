import { ArtistAbout } from './artistAbout.interface';

export interface Artist {
    id: Readonly<number>,
    date: Date,
    man: string,
    header: string,
    project: string,
    gallery: string,
    video: string,
    videosLink: string,
    blog: string,
    subscribe: string,
    testimonial: string,
    contact: string,
    name: string,
    artistAbouts: ArtistAbout[];
}