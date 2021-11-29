import { atom } from "jotai";

export enum NavType {
  DOCK = "DOCK",
  DEFAULT = "DEFAULT",
}

export const navAtom = atom<NavType>(NavType.DEFAULT);
