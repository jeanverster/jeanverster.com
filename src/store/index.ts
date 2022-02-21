import { atom } from "jotai";

export enum NavType {
  DOCK = "Dock",
  DEFAULT = "Classic",
}

export const navAtom = atom<NavType>(NavType.DOCK);

export const initAtom = atom(false);
