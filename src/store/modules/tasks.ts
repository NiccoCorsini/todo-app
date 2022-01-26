import { State, Task, MutationsTypes } from "@/definitions/definitions";

import { getTasks, setTasks } from "@/helpers/localstorage";

const tasks = {
  state: {
    tasks: [],
    status: false,
  } as State,
  mutations: {
    [MutationsTypes.SET_ALL](state: State): void {
      state.tasks = getTasks();
    },

    [MutationsTypes.ADD_NEW_TASK](state: State, task: Task): void {
      // state.tasks.unshift(task);
      state.tasks.push(task);
      state.status = true;
      setTasks(state.tasks);
    },
    [MutationsTypes.DELETE_TASK](state: State, taskId: string): void {
      state.tasks.splice(state.tasks.map((e) => e.id).indexOf(taskId), 1);
      setTasks(state.tasks);
    },
    [MutationsTypes.UPDATE_TASK](state: State, task: Task): void {
      const index: number = state.tasks.map((e) => e.id).indexOf(task.id);

      state.tasks[index].todo != task.todo
        ? (state.tasks[index].todo = task.todo)
        : (state.tasks[index].status = task.status);

      state.status = false;
      setTasks(state.tasks);
    },
    [MutationsTypes.CLEAR_ALL]: (state: State): void => {
      state.tasks.splice(0, state.tasks.length);
      setTasks(state.tasks);
    },
  },
  getters: {
    getAllTasks: (state: State): Task[] => state.tasks,
    solvedTasks: (state: State): Task[] =>
      state.tasks.filter((task) => task.status),
    unsolvedTasks: (state: State): Task[] =>
      state.tasks.filter((task) => !task.status),
    getStatus: (state: State): boolean => state.status,
  },
};

export default tasks;
