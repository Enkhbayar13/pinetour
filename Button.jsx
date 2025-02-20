export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={" py-2 px-3  bg-[#3C82F6] rounded-md  " + className}
    >
      {children}
    </button>
  );
};
