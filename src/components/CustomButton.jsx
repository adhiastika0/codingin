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
      className={`flex gap-2 items-center border ${borderColor} justify-center w-fit text-white ${backgroundColor} font-bold py-2 px-4 rounded-md ${shadowColor}`}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
