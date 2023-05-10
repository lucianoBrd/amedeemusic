import { Local } from "./local.interface";
import { Video } from "./video.interface";

export interface VideoDescription {
    id: Readonly<number>,
    description: string,
    local: Local,
    video: Video,
}