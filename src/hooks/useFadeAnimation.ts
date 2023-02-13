import { initAtom } from "@store";
import { fadeUp } from "@utils";
import { useAtomValue } from "jotai/utils";
import { useCallback } from "react";

export const useFadeAnimation = (delay: number) => {
  const init = useAtomValue(initAtom);

  return useCallback(() => {
    if (!init) {
      return fadeUp(delay);
    }
    return {};
  }, [init, delay]);
};
