import { Member, SimpleMember } from "@/model/member";
import { generateFormattedRoles } from "@/utils/rolesFormatter";
("react");

type Props = SimpleMember;

export default function CarouselItemFlip({ name, period, roles }: Props) {
  const textStyle =
    "text-custom-white opacity-50 font-bold text-xs sm:text-sm md:text-base lg:text-lg";

  return (
    <div className="flex flex-col gap-1">
      <p className="text-custom-white font-extrabold text-md sm:text-lg md:texl-xl lg:text-2xl">
        {name}
      </p>
      <p className={textStyle}>{`(${period})`}</p>
      <p className={textStyle}>{generateFormattedRoles(roles)}</p>
    </div>
  );
}
