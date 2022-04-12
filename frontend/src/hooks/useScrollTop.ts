import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useScrollTop = (): null => {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default useScrollTop;
