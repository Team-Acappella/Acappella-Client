import throttle from 'lodash/throttle';
import { useCallback, useMemo, useRef, useState } from 'react';

const useScrollPage = (maxPage: number) => {
  const [page, setPage] = useState(0);

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (e.deltaY > 0.2) {
        setPage((prev) => Math.min(prev + 1, maxPage - 1));
      } else if (e.deltaY < -0.2) {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    },
    [maxPage]
  );

  const throttleWheel = useMemo(
    () => throttle(onWheel, 1500, { leading: true, trailing: false }),
    [onWheel]
  );

  const lastTouchYRef = useRef<number | undefined>(undefined);

  const onTouchStart = (e: React.TouchEvent) => {
    lastTouchYRef.current = e.touches[0]?.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (lastTouchYRef.current) {
      const touchEnd = e.changedTouches[0]?.clientY;
      if (touchEnd) {
        const touchDelta = lastTouchYRef.current - touchEnd;
        if (touchDelta > 1) {
          setPage((prev) => Math.min(prev + 1, maxPage - 1));
        } else if (touchDelta < -1) {
          setPage((prev) => Math.max(prev - 1, 0));
        }
        lastTouchYRef.current = undefined;
      }
    }
  };

  return { page, throttleWheel, onTouchStart, onTouchEnd };
};

export default useScrollPage;
