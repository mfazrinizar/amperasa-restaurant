import { create } from "zustand";

interface State {
  tab: number;
}

interface Actions {
  setTab: (tab: number) => void;
}

const useMenuTabStore = create<State & Actions>((set) => ({
  tab: 0,
  setTab: (tab) => set(() => ({ tab })),
}));

export default useMenuTabStore;
