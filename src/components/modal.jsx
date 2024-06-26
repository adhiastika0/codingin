const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 x-50 bg-white w-screen h-screen'>
      {children}
    </div>
  );
};

export default Modal;
