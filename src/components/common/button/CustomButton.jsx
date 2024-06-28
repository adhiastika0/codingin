const CustomButton = ({
  children,
  backgroundColor,
  shadowColor,
  border,
  textColor = 'text-white',
  onClick,
  style,
}) => {
  return (
    <button
      tabIndex={0}
      className={`flex items-center ${style} justify-center ${textColor} self-stretch ${backgroundColor} font-bold py-2 px-4 rounded-md ${border} ${shadowColor} active:translate-y-[6px] active:shadow-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
