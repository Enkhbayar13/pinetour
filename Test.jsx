import { MdVerified } from "react-icons/md";

export const Test = ({}) => {
  return (
    <div className="flex ">
      <div>
        <img
          className="rounded-full size-20"
          src="https://cdn.britannica.com/18/237818-004-8A8FBCA9.jpg"
          alt="profile"
        />
        <MdVerified />
      </div>
      <div>
        <h1 className="text-black font-bold">Naruto Uzumaki</h1>
        <p className="text-grey">UX Designer</p>
      </div>
    </div>
  );
};
