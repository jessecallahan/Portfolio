// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    // Automatically routes users to your /home page respecting the basePath
    router.replace('/home');
  }, [router]);
  return (
    <>
      <main>
      </main>
    </>
  );
}
