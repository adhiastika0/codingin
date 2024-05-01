const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center text-white self-stretch ${backgroundColor} font-bold py-2 px-4 rounded-md shadow-customin`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
