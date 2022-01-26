export type State = {
  tasks: Task[];
  status: boolean;
};

export type Task = {
  readonly id: string;
  todo: string;
  status: boolean;
};

export enum MutationsTypes {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  DELETE_TASK = "DELETE_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  CLEAR_ALL = "CLEAR_ALL",
  SET_ALL = "SET_ALL",
}

export interface Mutations {
  [MutationsTypes.SET_ALL](state: State, tasks: Task[]): void;
  [MutationsTypes.ADD_NEW_TASK](state: State, task: Task): void;
  [MutationsTypes.DELETE_TASK](state: State, taskId: string): void;
  [MutationsTypes.UPDATE_TASK](state: State, task: Task): void;
  [MutationsTypes.CLEAR_ALL](state: State): void;
}
