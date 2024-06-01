const CustomButton = ({ children, backgroundColor, shadowColor, onClick }) => {
  return (
    <button
      tabIndex={0}
      className={`flex items-center h-10 justify-center text-white self-stretch ${backgroundColor} font-bold py-2 px-4 rounded-md ${shadowColor} active:translate-y-[6px] active:shadow-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
