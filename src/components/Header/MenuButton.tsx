"react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

type Props = {
  showMenu: boolean;
  onClick: () => void;
};

export default function MenuButton({ showMenu, onClick }: Props) {
  return (
    <button
      className="w-[50px] h-[50px] bg-[#D76B64] shadow-sm shadow-bottom shadow-gray-400
    rounded-full border-4 border-white 
  text-white font-extrabold flex items-center justify-center z-10"
      onClick={onClick}
    >
      {showMenu ? (
        <IoClose className="w-[30px] h-[25px]" />
      ) : (
        <AiOutlineMenu className="w-[30px] h-[25px]" />
      )}
    </button>
  );
}
