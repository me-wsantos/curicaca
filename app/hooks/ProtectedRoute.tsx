'use client';

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'
import HomeAdmin from '../[locale]/(overview)/admin/page';

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoutes({ children }: Props) {
  const [isLogged, setIsLogged] = useState(false)

  const router = useRouter();

  useEffect(() => {
    const cookieStore = getCookie("@curicaca");
    
    if (cookieStore) {
      setIsLogged(true);
    }
  }, [router]);

  if (!isLogged) {
    return <HomeAdmin/>;
  }

  return <>{children}</>;
}