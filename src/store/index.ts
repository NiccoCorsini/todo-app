import { State } from "@/definitions/definitions";
import tasks from "./modules/tasks";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    tasks,
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
