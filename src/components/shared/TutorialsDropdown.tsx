import { MenuObjectType } from "@/utils/navigation/menu";
import Link from "next/link";
("react");

type Props = {
  submenus: MenuObjectType[];
};

export default function TutorialsDropdown({ submenus }: Props) {
  return (
    <div
      className="flex flex-col justify-center items-start
        px-8 py-5 gap-2 
        shadow shadow-[#86BD08]/50 bg-white"
    >
      {submenus.map(({ href, text }) => (
        <Link key={href} href={href} className="peer">
          <p
            className={`text-xs md:text-sm text-dark-brown 
          text-opacity-25 hover:text-opacity-90 font-extrabold`}
          >
            {text}
          </p>
        </Link>
      ))}
    </div>
  );
}
