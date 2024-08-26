import { Link } from "react-router-dom";

type props = {
  namePage: string;
};

export default function ChangeTitle({ namePage }: props) {
  return (
    <>
      <div className=" text-sm text-[#00000080] my-20">
        <Link to={"/"} className="mr-2 text-[15px]">
          Home
        </Link>{" "}
        /<span className="text-black ml-2 text-[15px]">{namePage}</span>
      </div>
    </>
  );
}
