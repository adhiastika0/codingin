import Link from 'next/link';

const CustomButton = ({
  children,
  backgroundColor,
  borderColor,
  shadowColor,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`flex gap-2 items-center border ${borderColor} justify-center size-fit text-white ${backgroundColor} font-bold lg:py-2 lg:px-4 py-2 px-3 rounded-md ${shadowColor}`}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
