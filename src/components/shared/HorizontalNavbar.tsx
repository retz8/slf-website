import { menu } from "@/utils/navigation/menu";
import Link from "next/link";
export default function HorizontalNavbar() {
  const baseTextStyle =
    "text-custom-white font-extrabold tracking-wider opacity-25 active:opacity-100 hover:opacity-100";

  return (
    <ul className="flex flex-col gap-5 pb-5 pl-3">
      {menu.map((item) =>
        item.text === "TUTORIALS" ? (
          <li key={item.href}>
            <div className="flex flex-col">
              <p className={`text-lg md:text-xl ${baseTextStyle}`}>
                {item.text}
              </p>
              <div className="flex flex-col pl-4 py-1">
                {item.submenu?.map((subitem) => (
                  <Link key={subitem.href} href={subitem.href}>
                    <p className={`text-base md:text-lg ${baseTextStyle}`}>
                      {subitem.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ) : (
          <li key={item.href}>
            <Link href={item.href}>
              <p className={`text-lg md:text-xl ${baseTextStyle}`}>
                {item.text}
              </p>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
