import { useState } from "react";
import { Button } from ".";

export const Task = ({ title, isDone }) => {
  const [isChecked, setIsChecked] = useState(isDone);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex justify-between min-w-[345px] rounded-md bg-[#F9FAFB] p-4">
      <div className="flex gap-[10px]  items-center">
        <input type="checkbox" />
        <p className={'text-[#000] ${isChecked ? " line-through" : null} '}>
          {" "}
          {title}
        </p>
      </div>
      <Button className="px-3 py-6[px] bg-[#FEF2F2] text-[#EF4444]">
        Delete
      </Button>
    </div>
  );
};
