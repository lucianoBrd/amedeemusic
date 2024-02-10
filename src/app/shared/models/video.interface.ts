import { SafeResourceUrl } from "@angular/platform-browser";
import { VideoDescription } from "./videoDescription.interface";

export interface Video {
    id: Readonly<number>,
    image: string,
    link: string,
    name: string,
    date: Date,
    videoDescriptions: VideoDescription[],
    videoDescription: VideoDescription,
    safeVideoLink: SafeResourceUrl,
}