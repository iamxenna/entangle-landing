import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useStore } from "Core/store";

export function useScrollToPosition(ref, key) {
  const dispatch = useDispatch();
  const {
    actions: {
      Scroll: { setScrollToOffset },
    },
  } = useStore((store) => ({
    Scroll: store.Store,
  }));

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const data = {};
    data[key] = scrollValue;
    dispatch(setScrollToOffset(data));
  }, [scrollValue]);

  const maxOffset = useMemo(() => {
    if (!ref.current) return 0;
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = ref.current.getBoundingClientRect();
    return elemRect.top - bodyRect.top;
  }, [ref.current]);

  useEffect(() => {
    const onScroll = (e) => {
      const scrollOffset = e.target.documentElement.scrollTop + 1;
      if (scrollOffset === 0) {
        setScrollValue(0.001);
        return;
      } else if (scrollOffset >= maxOffset) {
        setScrollValue(0.9999999);
        return;
      }
      setScrollValue(Math.max(Math.min(scrollOffset / maxOffset, 0.9999999), 0.001));
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [maxOffset]);
  return;
}
