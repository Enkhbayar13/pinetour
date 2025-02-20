"use client";
// import Image from "next/image";

import { Button, Input, Task } from "./components/";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addData = () => {
    setTasks([...tasks, { title: inputValue, isChecked: false }]);
  };

  const handleOnChange = (event) => {
    console.log(event, "event ");
    setInputValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center justify-items-center">
      <div className="flex flex-col  w-[600px] h-[800px] justify-center justify-items-center rounded-md items-center bg-white   gap-5 ">
        <h1 className="font-semibold text-black leading-7 text-[40px]">
          To-Do List
        </h1>
        <div className="flex gap-[6px]">
          <Input handleOnChange={handleOnChange} />
          <Button onClick={addData}>Add</Button>
        </div>
        <div className="flex gap-[6px] w-[345px]">
          <Button className="bg-#f3f4f6 px-3 py-1 text-black">All</Button>
          <Button className="bg-#f3f4f6 px-3 py-1 text-black">Active</Button>
          <Button className="">Completed</Button>
        </div>
        {tasks.map((task, index) => {
          return (
            <Task key={index} title={task.title} isDone={task.isChecked} />
          );
        })}

        <div className="flex justify-between w-[345px]  items-center">
          <p className="text-[#6B7280]">
            {1} of {2} task completed
          </p>
          <Button className="bg-transparent text-[#EF4444] px-0">
            Clear Completed
          </Button>
        </div>
        <div className="text-[#6B7280]">
          Powered by{"  "}
          <Link className="text-[#3B73ED]" href="https://pinecone.mn/">
            Pinecone academy
          </Link>
        </div>
      </div>
    </div>
  );
}

// import { Btn, HelloWorld, PrintText, Test } from "./components/";
// export default function Home() {
//   // const handlerOnClick = () => {
//   //   alert(" huuy? ");
//   // };

//   return (
//     <div className="flex w-[300px] h-[150px] bg-white rounded-md justify-center">
//       <div className=" flex gap-6 items-center text-black ">
//         <Test></Test>
//       </div>
//     </div>
//   );
// }
