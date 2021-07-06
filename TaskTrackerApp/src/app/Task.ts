export interface Task {
    id?: number; // ? means optional so that it does not throw an error if not added
    text: string;
    day: string;
    reminder: boolean;

}