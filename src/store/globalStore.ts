import { IUser } from "../interfaces/global";
import { createStore } from "./createStore";

type TUser = IUser & { id: number };

interface Store {
  user: TUser | null;
  openToast: boolean;
  setUser: (user: TUser | null) => void;
  setOpenToast: () => void;
  setCloseToast: () => void,

}

export const useGlobalStore = createStore<Store>((setState, getState) => ({
  user: null,
  openToast: false,
  setUser: (user) => setState({ user }),
  setOpenToast: () => setState({ openToast: true }),
  setCloseToast: () => setState({ openToast: false }),
}));
