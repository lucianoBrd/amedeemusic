import { ProjectPlatform } from "./projectPlatform.interface";
import { Title } from "./title.interface";
import { Type } from "./type.interface";

export interface Project {
    id: Readonly<number>,
    name: string,
    date: Date,
    image: string,
    titles: Title[],
    projectPlatforms: ProjectPlatform[],
    type: Type,
}