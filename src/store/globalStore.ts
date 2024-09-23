import { IUser } from "../interfaces/global";
import { createStore } from "./createStore";



interface Store {
  user: IUser | null;
}

export const globalStore = createStore<Store>({
  user: null,
});
