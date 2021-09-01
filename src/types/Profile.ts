import { Project } from "./Project";

export type Profile = {
    title: string,
    name: string,
    description: string,
    url: string,
    projects: Project[]
}