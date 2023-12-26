import { useStore } from "Core/store";

export function useScroll(key) {
  const {
    store: {
      Scroll: { scrollToOffset },
    },
  } = useStore((store) => ({
    Scroll: store.Store,
  }));
  return scrollToOffset[key] ? scrollToOffset[key] : 0;
}
