import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


export function Header() {
  const { pathname } = useRouter();

  return (
    <header className="main-header">
      <h1>Civic Alley</h1>
      <nav>
        {pathname === '/about' && (
          <Link href="/">
            <a>Home</a>
          </Link>
        )}
        {pathname !== '/about' && (
          <Link href="/about">
            <a>About</a>
          </Link>
        )}
      </nav>
    </header>
  );
}
