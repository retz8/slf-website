import PageTitle from "../shared/PageTitle";
import FaqList from "./FaqList";
import Link from "next/link";
import LinkButton from "../shared/LinkButton";
import { Faq } from "@/model/faq";

type Props = {
  faqs: Faq[];
};

export default function FaqSummary({ faqs }: Props) {
  return (
    <div className="flex flex-col md:flex-row mb-12 pb-10 mt-10 md:mt-0">
      <PageTitle text="FAQ" isSummary={true} />
      <div className="ml-3 flex flex-col items-center md:items-end">
        {faqs !== undefined && <FaqList faqs={faqs} isSummary={true} />}
        <Link href="/faq">
          <LinkButton text="View More" link="" isRouting={true} />
        </Link>
      </div>
    </div>
  );
}
