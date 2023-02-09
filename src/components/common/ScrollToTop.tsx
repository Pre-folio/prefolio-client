import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    console.log('router', router);
    window.document.scrollingElement?.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
