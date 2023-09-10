import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkItem = ({ title, url }) => {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={`${
        pathname === url ? 'border-b-2 border-blue-primary' : 'hover:mb-1'
      } transition-spacing ease-in-out duration-300 p-2 text-sm text-dark flex items-center gap-2 group`}
    >
      {title}
    </Link>
  );
};

export default LinkItem;
