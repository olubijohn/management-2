import Link from "next/link";
import { RiHome5Line } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";

type BreadcrumbItem = {
  label: string;
  href: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-2 text-[12px] mb-4 p-[10px]">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={item.href} className="flex items-center gap-1">
            {idx === 0 ? (
              <>
                <RiHome5Line className="text-lg mr-1" />
                <Link href={item.href} className={isLast ? "font-bold" : ""}>
                  {item.label}
                </Link>
              </>
            ) : (
              <>
                <HiChevronRight className="mx-1 text-base" />
                <Link href={item.href} className={isLast ? "font-bold" : ""}>
                  {item.label}
                </Link>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
