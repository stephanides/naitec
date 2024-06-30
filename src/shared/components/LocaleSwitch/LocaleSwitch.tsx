// components/LocaleSwitcher.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
export const LocaleSwitch = () => {
  const { locale, pathname } = useRouter();

  return (
    <div>
      <Link href={pathname} locale="sk">
        <button>SK</button>
      </Link>
      <Link href={pathname} locale="en">
        <button>EN</button>
      </Link>
    </div>
  );
};
