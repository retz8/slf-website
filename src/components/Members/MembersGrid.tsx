import { Member } from "@/model/member";
import MembersGridCard from "./MembersGridCard";

type Props = {
  members: Member[];
};

export default function MembersGrid({ members }: Props) {
  return (
    <div className="w-full py-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members &&
          members.map((member, index) => (
            <li key={member.id}>
              <MembersGridCard member={member} priority={index < 3} />
            </li>
          ))}
      </ul>
    </div>
  );
}
