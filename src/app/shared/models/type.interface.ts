import { Project } from "./project.interface";

export interface Type {
    id: Readonly<number>,
    name: string,
    projects: Project[],
}