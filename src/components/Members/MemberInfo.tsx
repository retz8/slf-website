import { generateFormattedRoles } from "@/utils/rolesFormatter";

type Props = {
  name: string;
  period: string;
  roles: string[];
  isModal?: boolean;
};

export default function MemberInfo({
  name,
  period,
  roles,
  isModal = false,
}: Props) {
  const simpleTextStyle =
    "opacity-50 text-[13px] md:text-[16px] lg:text-[18px] font-bold";

  return (
    <div className={`flex flex-col ${isModal ? "" : "items-center"}`}>
      <p
        className={`${
          isModal ? "text-custom-white" : "text-dark-brown"
        } text-[18px] md:text-[22px] lg:text-[26px] font-extrabold`}
      >
        {name}
      </p>
      <p
        className={`${
          isModal ? "text-custom-white" : "text-dark-brown"
        } ${simpleTextStyle}`}
      >{`(${period})`}</p>
      <p
        className={`${
          isModal ? "text-custom-white" : "text-dark-brown"
        } ${simpleTextStyle}`}
      >
        {generateFormattedRoles(roles)}
      </p>
    </div>
  );
}
