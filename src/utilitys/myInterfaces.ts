export interface TaskObject {
    id: number,
    title: string,
    time: number,
    complete: boolean,
    edit: boolean
    editTime: number
}

export interface TaskArray extends Array<TaskObject>{}
