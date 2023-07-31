import { Member } from "@/model/member";
import Image from "next/image";
("react");
import MemberInfo from "./MemberInfo";

type Props = {
  member: Member;
};

export default function MemberModal({ member }: Props) {
  const { name, period, roles, image, introduction } = member;

  return (
    <section className="flex items-center bg-less-dark-brown w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg aspect-[985/378] rounded-3xl p-8">
      <div className="basis-1/3 flex items-start">
        <Image
          className="rounded-2xl object-cover aspect-square"
          src={image}
          width={300}
          height={300}
          alt={`${name} photo`}
          priority
        />
      </div>

      <div className="basis-2/3 ml-3 w-full max-h-full flex flex-col items-start ">
        <MemberInfo name={name} period={period} roles={roles} isModal={true} />
        {introduction !== undefined && (
          <p className="mt-1 text-clip overflow-hidden whitespace-normal text-custom-white">
            {introduction}
          </p>
        )}
      </div>
    </section>
  );
}
