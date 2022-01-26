import { Task } from "@/definitions/definitions";

export const setTasks = (Tasks: Task[]): void => {
  localStorage.setItem("tasks", JSON.stringify(Tasks));
};

export const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};
