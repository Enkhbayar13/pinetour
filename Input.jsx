export const Input = ({ handleOnChange }) => {
  return (
    <input
      onKeyDown={handleOnChange}
      onChange={handleOnChange}
      className="min-w-[280px] py-2 px-4 rounded-md border-solid bg-slate-600 border-[#E4E4E7] text-black"
      placeholder="Add a new task..."
    />
  );
};
