import { Artist } from "./artist.interface";
import { Local } from "./local.interface";

export interface ArtistAbout {
    id: Readonly<number>,
    about: string,
    local: Local,
    artist: Artist,
}