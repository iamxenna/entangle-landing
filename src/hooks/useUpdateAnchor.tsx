import { useStore } from "Core/store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

function useUpdateAnchor(anchorName: string) {
  const dispatch = useDispatch();
  const { ref, inView } = useInView();
  const {
    actions: {
      Anchor: { setAnchor },
    },
  } = useStore((store) => {
    store.Anchor;
  });

  useEffect(() => {
    if (inView) {
      dispatch(setAnchor(anchorName));
    }
  }, [inView]);

  return ref;
}

export default useUpdateAnchor;
