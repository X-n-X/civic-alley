import Link from 'next/link';
import { useRouter } from 'next/router'

export function NavTabs() {
  const { pathname } = useRouter();

  return (
    <nav className="nav-tabs">
      <Link href="/">
        <a
          className={`nav-tabs__link${pathname === '/' ? ' nav-tabs__link--active' : ''}`}
        >
          Home
        </a>
      </Link>
      <Link href="/covid-testing-sites">
        <a
          className={`nav-tabs__link${pathname === '/covid-testing-sites' ? ' nav-tabs__link--active' : ''}`}
        >
          Covid Testing Sites
        </a>
      </Link>
      <Link href="/representatives">
        <a
          className={`nav-tabs__link${pathname === '/representatives' ? ' nav-tabs__link--active' : ''}`}
        >
          Find Your Local Representatives
        </a>
      </Link>
    </nav>
  );
}
