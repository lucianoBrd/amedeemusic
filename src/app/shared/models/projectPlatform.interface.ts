import { Project } from "./project.interface";

export interface ProjectPlatform {
    id: Readonly<number>,
    link: string,
    fa: string,
    project: Project,
}