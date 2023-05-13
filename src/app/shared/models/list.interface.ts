import { View } from "./view.interface";

export interface List<T> {
    'hydra:totalItems': number;
    'hydra:member': T[];
    'hydra:view': View;
}