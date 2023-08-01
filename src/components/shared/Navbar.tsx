import { menu } from "@/utils/navigation/menu";
import Link from "next/link";
import TutorialsDropdown from "./TutorialsDropdown";
import DownIcon from "../ui/icons/DownIcon";

type Props = {
  ulStyle: string;
  textColor: string;
  isFooter?: boolean;
};

export default function Navbar({
  ulStyle,
  textColor,
  isFooter = false,
}: Props) {
  // TRIED TO DIRECT TO HOME PAGE AND SCROLL TO TUTORIALS SECTION
  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   // first prevent the default behavior
  //   e.preventDefault();
  //   // get the href and remove everything before the hash (#)
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, "");
  //   // get the element by id and use scrollIntoView
  //   const elem = document.getElementById(targetId);
  //   elem?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <ul className={`relative ${ulStyle}`}>
      {menu.map((item) =>
        item.href === "/tutorials" ? (
          isFooter ? (
            <Link href="/tutorials/egg-removal">
              <p
                className={`peer text-xs md:text-base ${textColor} font-extrabold cursor-pointer`}
              >
                {item.text}
              </p>
            </Link>
          ) : (
            <li key={item.href} className=" flex flex-col items-center">
              <p
                className={`peer text-xs md:text-base ${textColor} font-extrabold cursor-pointer`}
              >
                {item.text}
              </p>
              <div
                className="absolute top-0 mt-5 hidden peer-hover:flex hover:flex 
              flex-col items-center"
              >
                <DownIcon />
                {item.submenu !== undefined && (
                  <TutorialsDropdown submenus={item.submenu} />
                )}
              </div>
            </li>
          )
        ) : (
          <li key={item.href} className=" flex flex-col items-center">
            <Link href={item.href} className="peer">
              <p className={`text-xs md:text-base ${textColor} font-extrabold`}>
                {item.text}
              </p>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
