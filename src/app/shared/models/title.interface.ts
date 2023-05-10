import { Project } from "./project.interface";
import { TitlePlatform } from "./titlePlatform.interface";

export interface Title {
    id: Readonly<number>,
    name: string,
    lyrics: string,
    project: Project,
    titlePlatforms: TitlePlatform[],
}