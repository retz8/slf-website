import PageTitle from "../shared/PageTitle";
import ShortIntroduction from "./ShortIntroduction";
import LinkButton from "../shared/LinkButton";
import Link from "next/link";
import { IntroParagraph } from "@/model/generalInfo";

type Props = {
  intro: IntroParagraph[];
};

export default function GeneralInfoSummary({ intro }: Props) {
  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="General Info" isSummary={true} />
      <div className="ml-3 flex flex-col items-center lg:items-start">
        <ShortIntroduction intro={intro} />
        <Link href="/generalInfo">
          <LinkButton text="View More" link="" isRouting={true} />
        </Link>
      </div>
    </div>
  );
}
