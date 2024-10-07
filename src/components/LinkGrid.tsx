import Link from 'next/link';

interface LinkGridProps {
  links: {
    href: string;
    label: string;
  }[];
}

const LinkGrid: React.FC<LinkGridProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-4 gap-4 m-5 ">
      {links.map((link, index) => (
        <Link key={index} href={link.href} legacyBehavior>
          <a className="flex items-center justify-center p-[10px] bg-gray-200 rounded-[12px] hover:bg-gray-300">
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LinkGrid;