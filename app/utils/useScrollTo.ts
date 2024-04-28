import { useCallback } from 'react';
import { scroller } from 'react-scroll';

export type ScrollOptionsProps = {
  durarion?: number;
  smooth?: boolean;
  offset?: number;
};

const useScrollTo = () => {
  const scrollTo = useCallback(
    (elementId: string, options?: ScrollOptionsProps) => {
      scroller.scrollTo(elementId, {
        duration: 500,
        smooth: true,
        ...(options || {}),
      });
    },
    [],
  );

  return { scrollTo };
};

export default useScrollTo;
