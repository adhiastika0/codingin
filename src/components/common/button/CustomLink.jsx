import Link from 'next/link';

const CustomLink = ({
  children,
  backgroundColor,
  borderColor,
  shadowColor,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`flex gap-2 items-center border ${borderColor} min-w-fit justify-center text-white ${backgroundColor} font-bold lg:py-2 lg:px-3 py-1 px-2 rounded-md ${shadowColor} active:translate-y-[6px] active:shadow-none`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
