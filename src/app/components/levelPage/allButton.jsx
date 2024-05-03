const AllButton = ({
  backgroundColor,
  textColor = "",
  borderColor,
  shadow,
  onClick,
  children,
}) => {
  return (
    <button
      className={` flex items-center justify-center self-stretch ${textColor} ${backgroundColor} font-bold py-2 px-4 border-2 ${borderColor} rounded-lg ${shadow} active:shadow-[0_0px_0_0_#fff] active:translate-y-[6px] transition-all duration-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AllButton;
