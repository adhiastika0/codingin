const CustomButton = ({ children, backgroundColor, shadowColor, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center text-white self-stretch bg-${backgroundColor} font-bold py-2 px-4 rounded-md shadow-${shadowColor} active:translate-y-[6px] active:shadow-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
